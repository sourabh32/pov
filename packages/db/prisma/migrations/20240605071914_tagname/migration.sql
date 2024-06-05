-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "tagname" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tagname_key" ON "User"("tagname");
