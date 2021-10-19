/*
  Warnings:

  - You are about to drop the `Champion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Champion";

-- CreateTable
CREATE TABLE "champion" (
    "id" SERIAL NOT NULL,
    "titleHolder" TEXT NOT NULL,
    "dateWon" TIMESTAMP(3) NOT NULL,
    "dateLost" TIMESTAMP(3),
    "show" TEXT NOT NULL,
    "previousChampion" TEXT,
    "currentChampion" BOOLEAN,

    CONSTRAINT "champion_pkey" PRIMARY KEY ("id")
);
