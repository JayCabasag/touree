import { PrismaClient } from '../src/generated/prisma';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting database seeding...');

  const userCount = await prisma.user.count();

  if (userCount > 0) {
    console.log('⚠️ Database already contains data. Skipping seed.');
    return;
  }

  console.log('📭 Database is empty. Seeding...');

  //
  // Users
  //
  const password = await bcrypt.hash('test12345', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@touree.com',
      firstName: 'System',
      lastName: 'Administrator',
      password,
      role: 1,
      provider: 'email',
      status: 1,
    },
  });

  const traveler = await prisma.user.create({
    data: {
      email: 'traveler@touree.com',
      firstName: 'Jane',
      lastName: 'Traveler',
      password,
      role: 2,
      provider: 'email',
      status: 1,
    },
  });

  const coordinator = await prisma.user.create({
    data: {
      email: 'coordinator@touree.com',
      firstName: 'John',
      lastName: 'Coordinator',
      password,
      role: 3,
      provider: 'email',
      status: 1,
    },
  });

  console.log('✅ Created users');

  //
  // Tour Packages
  //
  const boracay = await prisma.tourPackage.create({
    data: {
      name: 'Boracay Island Getaway',
      description:
        'Experience the white sand beaches and crystal-clear waters of Boracay.',
      location: 'Boracay, Philippines',
    },
  });

  const palawan = await prisma.tourPackage.create({
    data: {
      name: 'Palawan Adventure',
      description:
        'Explore the lagoons, islands, and underground river of Palawan.',
      location: 'Palawan, Philippines',
    },
  });

  console.log('✅ Created tour packages');

  //
  // Tour Package Images
  //
  await prisma.tourPackageImage.createMany({
    data: [
      {
        tourPackageId: boracay.id,
        url: 'https://picsum.photos/1200/800?random=1',
        order: 1,
      },
      {
        tourPackageId: boracay.id,
        url: 'https://picsum.photos/1200/800?random=2',
        order: 2,
      },
      {
        tourPackageId: boracay.id,
        url: 'https://picsum.photos/1200/800?random=3',
        order: 3,
      },
      {
        tourPackageId: palawan.id,
        url: 'https://picsum.photos/1200/800?random=4',
        order: 1,
      },
      {
        tourPackageId: palawan.id,
        url: 'https://picsum.photos/1200/800?random=5',
        order: 2,
      },
    ],
  });

  console.log('✅ Created package images');

  //
  // Bookings
  //
  await prisma.booking.createMany({
    data: [
      {
        packageId: boracay.id,
        travelerId: traveler.id,
        coordinatorId: coordinator.id,
      },
      {
        packageId: palawan.id,
        travelerId: traveler.id,
        coordinatorId: coordinator.id,
      },
    ],
  });

  console.log('✅ Created bookings');

  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
