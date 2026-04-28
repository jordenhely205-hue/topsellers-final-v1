import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const dbUrl = process.env.DATABASE_URL || '';
const isAccelerate = dbUrl.startsWith('prisma+postgres://');

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
    ...(isAccelerate ? { accelerateUrl: dbUrl } : {})
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
