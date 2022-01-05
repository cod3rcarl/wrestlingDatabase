-- CreateTable
CREATE TABLE "champion" (
    "id" TEXT NOT NULL,
    "titleHolder" TEXT NOT NULL,
    "titleHolderNumber" INTEGER,
    "dateWon" TIMESTAMP(3) NOT NULL,
    "dateLost" TIMESTAMP(3),
    "show" TEXT NOT NULL,
    "currentChampion" BOOLEAN,

    CONSTRAINT "champion_pkey" PRIMARY KEY ("id")
);
