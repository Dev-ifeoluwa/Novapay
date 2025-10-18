import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    // --------`
    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if(!user) return null;

        const vaild = await bcrypt.compare(password, user.password);
        if(!vaild) return null;

        const { password: _, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
        const refreshToken = this.jwtService.sign({sub: user.id}, { expiresIn: '7d',  secret: process.env.JWT_REFRESH_SECRET as string });
        return { accessToken, refreshToken  };
    }
}
