-- AlterTable
ALTER TABLE "TotalUser" ADD COLUMN     "accountNumber" TEXT,
ADD COLUMN     "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "transactions" JSONB DEFAULT '[]';
