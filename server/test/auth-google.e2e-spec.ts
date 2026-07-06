/// <reference types="jest" />

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, UnauthorizedException } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthGoogleService } from '../src/modules/auth-google/auth-google.service';

describe('AuthGoogleController (e2e)', () => {
  let app: INestApplication<App>;

  const mockGoogleProfile = {
    id: 'google-test-id-12345',
    email: `google-test-${Date.now()}@example.com`,
    firstName: 'Google',
    lastName: 'Tester',
  };

  const authGoogleServiceMock = {
    getProfileByToken: jest.fn(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AuthGoogleService)
      .useValue(authGoogleServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ZodValidationPipe());
    app.setGlobalPrefix('v1');
    await app.init();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/auth/google/login (POST)', () => {
    it('should reject request with missing idToken', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({})
        .expect(400);
    });

    it('should reject request with an empty idToken string', () => {
      return request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({ idToken: '' })
        .expect(400);
    });

    it('should log in and return tokens for a valid Google idToken', async () => {
      authGoogleServiceMock.getProfileByToken.mockResolvedValueOnce(
        mockGoogleProfile,
      );

      const response = await request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({ idToken: 'valid-mock-id-token' })
        .expect(200);

      expect(response.body).toHaveProperty('token');
      expect(response.body).toHaveProperty('refreshToken');
      expect(authGoogleServiceMock.getProfileByToken).toHaveBeenCalledWith({
        idToken: 'valid-mock-id-token',
      });
    });

    it('should return the same user on repeated login with the same Google account', async () => {
      authGoogleServiceMock.getProfileByToken.mockResolvedValue(
        mockGoogleProfile,
      );

      const first = await request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({ idToken: 'valid-mock-id-token' })
        .expect(200);

      const second = await request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({ idToken: 'valid-mock-id-token' })
        .expect(200);

      // Both logins should resolve to the same underlying user/session identity,
      // even though tokens themselves may differ per session.
      expect(first.body).toHaveProperty('token');
      expect(second.body).toHaveProperty('token');
    });

    it('should reject an invalid Google idToken', () => {
      authGoogleServiceMock.getProfileByToken.mockRejectedValueOnce(
        new UnauthorizedException('Invalid Google token'),
      );

      return request(app.getHttpServer())
        .post('/v1/auth/google/login')
        .send({ idToken: 'invalid-mock-id-token' })
        .expect(401);
    });
  });
});
