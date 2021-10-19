/*
  Warnings:

  - You are about to drop the column `champion` on the `Champion` table. All the data in the column will be lost.
  - The `dateLost` column on the `Champion` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `titleHolder` to the `Champion` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `dateWon` on the `Champion` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `show` on table `Champion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Champion" DROP COLUMN "champion",
ADD COLUMN     "currentChampion" BOOLEAN,
ADD COLUMN     "titleHolder" TEXT NOT NULL,
DROP COLUMN "dateWon",
ADD COLUMN     "dateWon" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dateLost",
ADD COLUMN     "dateLost" TIMESTAMP(3),
ALTER COLUMN "show" SET NOT NULL;
