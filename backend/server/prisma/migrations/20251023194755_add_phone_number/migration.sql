/*
  Warnings:

  - Made the column `accountNumber` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monnifyAccountNumber` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monnifyAccountRef` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monnifyAccountStatus` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monnifyReservedId` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `transactionPin` on table `TotalUser` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DayPurchased` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `itemsPurchase` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `itemsTime` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TotalUser" ALTER COLUMN "accountNumber" SET NOT NULL,
ALTER COLUMN "monnifyAccountNumber" SET NOT NULL,
ALTER COLUMN "monnifyAccountRef" SET NOT NULL,
ALTER COLUMN "monnifyAccountStatus" SET NOT NULL,
ALTER COLUMN "monnifyReservedId" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "transactionPin" SET NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "DayPurchased" SET NOT NULL,
ALTER COLUMN "itemsPurchase" SET NOT NULL,
ALTER COLUMN "itemsTime" SET NOT NULL;

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
