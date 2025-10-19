import { BadRequestException, Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from './jwt.auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) {}

    @Post("register")
    async register(@Body() body: { email: string; password: string; firstName: string; lastName: string }, 
    @Res({ passthrough: true }) res: Response) {
        const existing = await this.usersService.findByEmail(body.email);
        if (existing) throw new BadRequestException('User already exists');

        const user = await this.usersService.createUser(body.email, body.password, body.firstName, body.lastName);
        const tokens = await this.authService.login(user);

        res.cookie('jid', tokens.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000,
        })
        return { user };
    }

    @Post("login")
    @HttpCode(200)
    async login(@Body() body: { email: string; password: string }, 
    @Res({ passthrough: true }) res: Response) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user) throw new BadRequestException('Invalid credentials');

        const tokens = await this.authService.login(user);
        res.cookie('jid', tokens.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000,
        });


        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return { user, tokens };
    }
    @UseGuards(JwtAuthGuard)
    @Get('me')
    async me(@Req() req: Request) {
    const userId = (req.user as any)?.userId;
    if (!userId) throw new BadRequestException('No user found');
    const dashboard = await this.usersService.getUserDashboard(userId);
    return { dashboard };
    }


    @Post("logout")
    async logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('jid')
        res.clearCookie('refreshToken')
        return { message: 'Logged out' };
    }      
}
