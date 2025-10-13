import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
// we import the authentication service that we wrote the logic here
import { AuthService } from './auth.service';
// import JWTauthGuard file to use the authentication guard
import { JwtAuthGuard } from './jwt,guard';
// /......... i find out more on this 
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
    // import the authservice here to use it
    constructor(private authService: AuthService) {}

    // the Registration request  // POST request
    @Post('register')
    register(@Body() registerDTO: any) {
        return this.authService.register(registerDTO)
    }

    // http request
    @HttpCode(HttpStatus.OK)
    // the Login request
    @Post('login')
    async login(
    @Body() body: {email:string; password: string}, 
    @Res() res: Response) {
        const token = await this.authService.login(body.email, body.password)

        // finding out more on this
        res.cookie('access_token', token.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24, // 1 day
          });

        return res.send({ message: 'Login successful' });
    }


    @Post('logout')
    async logout(@Res() res: Response) {
    res.clearCookie('access_token');
    return res.send({ message: 'Logged out successfully' });
    }


    // for protected login user only
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile() {
    return { message: 'Protected route accessed successfully!' };
    }
}
