/// <reference types="jest" />

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { ZodValidationPipe } from 'nestjs-zod';
import { RoleEnum } from '../src/modules/user/user.schemas';

describe('CoordinatorAuthController (e2e)', () => {
  let app: INestApplication<App>;

  // Use a unique email per test run to avoid collisions on repeated runs
  const testEmail = `coordinator-test-${Date.now()}@example.com`;
  const testPassword = 'Password123!';

  let accessToken: string;
  let refreshToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ZodValidationPipe());
    app.setGlobalPrefix('v1');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/auth/coordinator/email/register (POST)', () => {
    it('should register a new coordinator', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/register')
        .send({
          email: testEmail,
          password: testPassword,
          firstName: 'Test',
          lastName: 'Coordinator',
        })
        .expect(204);
    });

    it('should reject registration with an invalid email', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/register')
        .send({
          email: 'not-an-email',
          password: testPassword,
          firstName: 'Test',
          lastName: 'Coordinator',
        })
        .expect(400);
    });

    it('should reject registration with password too short', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/register')
        .send({
          email: testEmail,
          password: 'shortp',
          firstName: 'Test',
          lastName: 'Coordinator',
        })
        .expect(400);
    });

    it('should reject registration with a duplicate email', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/register')
        .send({
          email: testEmail,
          password: testPassword,
          firstName: 'Test',
          lastName: 'Coordinator',
        })
        .expect(409);
    });
  });

  describe('/auth/coordinator/email/login (POST)', () => {
    it('should reject login with wrong password', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/login')
        .send({ email: testEmail, password: 'wrongpassword' })
        .expect(401);
    });

    it('should log in and return tokens', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/coordinator/email/login')
        .send({ email: testEmail, password: testPassword })
        .expect(200);

      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('refreshToken');

      accessToken = response.body.token;
      refreshToken = response.body.refreshToken;
    });
  });

  describe('cross-role login prevention', () => {
    it('should reject a coordinator account logging in via the regular user endpoint', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/email/login')
        .send({ email: testEmail, password: testPassword })
        .expect(403); // adjust to whatever status validateLogin actually throws on role mismatch
    });

    it('should reject a coordinator account registering the same email as a regular user', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/email/register')
        .send({
          email: testEmail,
          password: testPassword,
          firstName: 'Test',
          lastName: 'Coordinator',
        })
        .expect(409); // email uniqueness should block this regardless of role
    });
  });

  describe('/auth/me (GET) — shared endpoint', () => {
    it('should reject request without token', () => {
      return request(app.getHttpServer()).get('/v1/auth/me').expect(401);
    });

    it('should return current coordinator profile with valid token', () => {
      return request(app.getHttpServer())
        .get('/v1/auth/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.email).toBe(testEmail);
          expect(res.body.role).toBe(RoleEnum.coordinator);
        });
    });
  });

  describe('/auth/refresh (POST) — shared endpoint', () => {
    it('should issue new tokens with valid refresh token', async () => {
      const response = await request(app.getHttpServer())
        .post('/v1/auth/refresh')
        .set('Authorization', `Bearer ${refreshToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('refreshToken');

      accessToken = response.body.token;
      refreshToken = response.body.refreshToken;
    });
  });

  describe('/auth/logout (POST) — shared endpoint', () => {
    it('should log out with valid token', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/logout')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(204);
    });

    it('should reject /me after logout with the same token', () => {
      return request(app.getHttpServer())
        .get('/v1/auth/me')
        .set('Authorization', `Bearer ${accessToken}`)
        .expect(401);
    });
  });
});
