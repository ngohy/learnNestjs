import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../prisma/prisma.service'
import { Users as UserModel, Prisma } from '@prisma/client'

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private config: ConfigService,
        private readonly prismaService: PrismaService) { }

    @Post('register')
    async register() {

    }

    @Post("login")
    async login(
        @Body() userData: {email:string, password:string} 
    ): Promise<UserModel> {
        const {email,password} = userData;
        return this.prismaService.users.findFirst({ where: {email:{contains: email}} })
    }
    
    @Post("test")
    async test(
        @Body() userData: {email:string, password:string} 
    ){
        const {email,password} = userData;
        return email
    }

    @Get("all")
    async allUsers(): Promise<UserModel[]>{
        return this.prismaService.users.findMany();
    }
}
