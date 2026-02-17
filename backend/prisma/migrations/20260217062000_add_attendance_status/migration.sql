-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PENDING', 'SHOW', 'NO_SHOW');

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN "attendanceStatus" "AttendanceStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE INDEX "Reservation_tableId_idx" ON "Reservation"("tableId");

-- CreateIndex
CREATE INDEX "Reservation_slotId_idx" ON "Reservation"("slotId");

-- CreateIndex
CREATE INDEX "Reservation_date_idx" ON "Reservation"("date");

-- CreateIndex
CREATE INDEX "Reservation_status_idx" ON "Reservation"("status");
