/*
  Warnings:

  - You are about to drop the column `transactions` on the `TotalUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TotalUser" DROP COLUMN "transactions";

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TotalUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
