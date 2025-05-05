//client api which interacts with database and this api used inside rest api.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;
//prisma is just variable which points prisma framwork curd api.
export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['query'] })