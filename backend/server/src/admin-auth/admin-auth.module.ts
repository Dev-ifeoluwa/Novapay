import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from 'src/admin/admin.module';


@Module({
  imports: [
    AdminModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: process.env.JWT_SECRET || 'secretKey',
          signOptions: { expiresIn: '1h' },
        }),
  ],
  controllers: [AdminAuthController],
  providers: [AdminAuthService, AdminService, PrismaService],
  exports: [AdminAuthService]
})
export class AdminAuthModule {}
