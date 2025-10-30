import { BadRequestException, Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import { AdminService } from 'src/admin/admin.service';
import type { Request, Response } from 'express';
import { AdminJwtAuthGuard } from './admin.jwt.guard';

@Controller('admin-auth')
export class AdminAuthController {
    constructor(
        private adminAuthService: AdminAuthService,
        private adminService: AdminService
    ) {}

    @Post("Admin-register")
    async register(@Body() body: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        middleName: string;
    },
    @Res({ passthrough: true }) res: Response) {
        const existing = await this.adminService.findByEmail(body.email)
        if(existing) throw new BadRequestException('User already exists')

        const Admin = await this.adminService.createAdmin(
            body.email,
            body.password,
            body.firstName,
            body.lastName,
            body.middleName
        );
        const token = await this.adminAuthService.login(Admin)

        res.cookie('jid', token.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000,
        })
        return { Admin }
    }

    @Post("Admin-login")
    @HttpCode(200)
    async login (@Body() body: { email: string; password: string },
    @Res({ passthrough: true }) res: Response) {
        const Admin = await this.adminAuthService.validateAdmin(body.email, body.password)
        if (!Admin) throw new BadRequestException("invalid credential")

        const token = await this.adminAuthService.login(Admin)
        res.cookie('jid', token.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 15 * 60 * 1000,
        })

        res.cookie('refreshToken', token.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return { Admin, token  }
    }


    @UseGuards(AdminJwtAuthGuard)
        @Get('me')
        async me(@Req() req: Request) {
        const userId = (req.user as any)?.userId;
        if (!userId) throw new BadRequestException('No user found');
        const dashboard = await this.adminService.getUserDashboard(userId);
        return { dashboard };
        }
    
    @Post("logout")
    async logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('jid')
        res.clearCookie('refreshToken')
        return { message: 'Logged out' };
    }      
}
