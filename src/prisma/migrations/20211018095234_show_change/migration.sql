/*
  Warnings:

  - You are about to drop the column `Show` on the `Champion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Champion" DROP COLUMN "Show",
ADD COLUMN     "show" TEXT;
