import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { Users, Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt/dist';
import bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
    ) {}
    
    //function hash password
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  async comparePassword(
    password: string,
    storePasswordHash: string,
  ): Promise<any> {
    return await bcrypt.compare(password, storePasswordHash);
  }

//   async authentication(email: string, password: string): Promise<any> {
//     const user = await this..getUserByEmail(email);
//     const check = await this.comparePassword(password, user.password);

//     if (!user || !check) {
//       return false;
//     }

//     return user;
//   }

//   async login(user:Users) {
//     const payload: = {
//       name: user.name,
//       email: user.email,
//       id: user.id,
//     };

//     return { access_token: this.jwtService.sign(payload) };
//   }
     
}
