import { Controller, Get } from '@nestjs/common';
import { BookingRoomService } from './booking-room.service';

@Controller('booking-room')
export class BookingRoomController {
    constructor(private bookingService:BookingRoomService){}
    @Get()
    getBooking(){
        return this.bookingService.getBooking();
    }
}
    