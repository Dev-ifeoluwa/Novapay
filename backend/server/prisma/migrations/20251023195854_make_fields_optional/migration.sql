-- AlterTable
ALTER TABLE "TotalUser" ALTER COLUMN "accountNumber" DROP NOT NULL,
ALTER COLUMN "monnifyAccountNumber" DROP NOT NULL,
ALTER COLUMN "monnifyAccountRef" DROP NOT NULL,
ALTER COLUMN "monnifyAccountStatus" DROP NOT NULL,
ALTER COLUMN "monnifyReservedId" DROP NOT NULL;
