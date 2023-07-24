/*
  Warnings:

  - You are about to drop the `ContentType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_contentId_fkey";

-- DropTable
DROP TABLE "ContentType";
