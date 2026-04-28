import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

function createPrismaClient() {
  try {
    return new PrismaClient({ log: ['query'] });
  } catch (error) {
    console.warn("Failed to initialize Prisma Client (likely due to wrong DATABASE_URL format). Returning dummy client for build phase.");
    return new Proxy({}, {
      get: () => {
        return () => { throw new Error("Prisma is not connected. Please set a valid postgresql:// DATABASE_URL."); };
      }
    }) as PrismaClient;
  }
}

export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
