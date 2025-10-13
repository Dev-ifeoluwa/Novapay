// we write the authencation logic here for registation and login


import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
// Also in bcrypt to use the password hashing feature
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    // importing prismaService file where we connect our database
    // also import jwtService for for @nestjs/jwt to for authentication and autheraztion
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    // registration logic
    async register (data: {name: string, email: string, password: string}) {
        // for hashing users password
        const hashed = await bcrypt.hash(data.password, 10)
        // for creating new users
        const user = await this.prisma.user.create({
            // users data that will be collected
            data: {
                name: data.name,
                email: data.email,
                password: hashed,
            }
        })
        // after creating the users i return that user
        return user;
    }


    // user login logic
    async login (email: string, password: string) {
        // find registered user so they can login, looking for there registered email
        const user = await this.prisma.user.findUnique({ where: { email } })
        // if No registered user or email throw user not find
        if (!user) throw new UnauthorizedException('user not found')

        // Also looking for registered password with the email
        const isMatch = await bcrypt.compare(password, user.password)
        
        // if thesame user password does not match with the registered password throw error
        if (!isMatch) throw new UnauthorizedException('invaild credentials')


        // i will get what this is saying after
        const token = await this.jwtService.signAsync({ sub: user.id });
        return { access_token: token };
    }

    async getUserById(userId: any) {
        return this.prisma.user.findUnique({ where: { id: userId } });
      }
}
