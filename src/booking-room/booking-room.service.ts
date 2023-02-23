import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingRoomService {
    getBooking(){
        return "booking"
    }
}
