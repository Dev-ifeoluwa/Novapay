import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    // --------for creating admin---------
    async createAdmin (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        middleName: string
    ) {
        const hash = await bcrypt.hash(password, 10)
        const Admin = await this.prisma.admin.create({
            data: {
                email,
                password:hash,
                firstName,
                lastName,
                middleName,
            },
            select: {
                email: true,
                firstName: true,
                lastName: true,
                middleName: true,
                createdAt: true, 
                updatedAt: true,
            }
        })
        return Admin
    }

    // -------------
    async findByEmail (email: string) {
        return this.prisma.admin.findUnique({
            where: { email }
        })
    }

    async findById (id: number) {
        return this.prisma.admin.findMany({
            where: { id }
        })
    }

    async getUserDashboard(id: number) {
        return this.prisma.admin.findUnique({
            where: { id },
             select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                middleName: true
             }
        })
    }
}
