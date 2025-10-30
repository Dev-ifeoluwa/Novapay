import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminAuthService {
    constructor(
        private adminService: AdminService,
        private jwtService: JwtService
    ) {}

    // -------
    async validateAdmin(email: string, password: string) {
        const Admin = await this.adminService.findByEmail(email)
        if(!Admin) return null;

         const vaild = await bcrypt.compare(password, Admin.password);
         if(!vaild) return null

         const { password: _, ...result } = Admin
         return result
    }


    async login(user :any) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' })
        const refreshToken = this.jwtService.sign({sub: user.id}, { expiresIn: '3d', secret: process.env.JWT_REFRESH_SECRET as string })
        return { accessToken, refreshToken }
    }
}
