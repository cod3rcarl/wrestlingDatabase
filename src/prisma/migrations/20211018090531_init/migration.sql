-- CreateTable
CREATE TABLE "Champion" (
    "id" SERIAL NOT NULL,
    "champion" TEXT NOT NULL,
    "dateWon" TIMESTAMP(3) NOT NULL,
    "dateLost" TIMESTAMP(3) NOT NULL,
    "Show" TEXT,
    "previousChampion" TEXT,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);
