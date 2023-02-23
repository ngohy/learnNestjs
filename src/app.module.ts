import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookingRoomModule } from './booking-room/booking-room.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [AuthModule, BookingRoomModule,ConfigModule.forRoot({isGlobal:true})],
  providers: [AppService, PrismaService],
})
export class AppModule {}
