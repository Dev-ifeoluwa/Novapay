import { Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    // ---------
    async createUser(email: string, password: string, firstName: string, lastName: string) {
        const hash = await bcrypt.hash(password, 10);
        const user = await this.prisma.totalUser.create({
            data: {
                email,
                password: hash,
                firstName,
                lastName,
                balance: 0
            },
            select: { 
                id: true, 
                email: true, 
                firstName: true, 
                lastName: true, 
                createdAt: true, 
                updatedAt: true,
                balance: true
            }
        })
        return user;
    }

    // ---------
    async findByEmail(email: string) {
        return this.prisma.totalUser.findUnique({
            where: { email }
        });
    }

    // ---------
    async findById(id: number) {
        return this.prisma.totalUser.findUnique({
            where: { id }
        });
    }

    async getUserDashboard(id: number) {
    return this.prisma.totalUser.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      balance: true,
      accountNumber: true,
      transactions: {
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          itemsPurchase: true,
          DayPurchased: true,
          itemsTime: true,
          description: true,
          amount: true,
        },
      },
    },
  });
}

}
