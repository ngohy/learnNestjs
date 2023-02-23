import { Module } from '@nestjs/common';
import { BookingRoomController } from './booking-room.controller';
import { BookingRoomService } from './booking-room.service';

@Module({
  controllers: [BookingRoomController],
  providers: [BookingRoomService]
})
export class BookingRoomModule {}
