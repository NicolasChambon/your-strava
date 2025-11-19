/*
  Warnings:

  - You are about to drop the column `hideFromHome` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `photoCount` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `polyline` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `stravaExternalId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `stravaUploadIdStr` on the `Activity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "hideFromHome",
DROP COLUMN "photoCount",
DROP COLUMN "polyline",
DROP COLUMN "stravaExternalId",
DROP COLUMN "stravaUploadIdStr",
ALTER COLUMN "gearId" DROP NOT NULL,
ALTER COLUMN "kilojoules" DROP NOT NULL,
ALTER COLUMN "averageWatts" DROP NOT NULL,
ALTER COLUMN "maxWatts" DROP NOT NULL,
ALTER COLUMN "weightedAverageWatts" DROP NOT NULL;
