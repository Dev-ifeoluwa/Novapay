/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface User {
  id: number;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private jwtService: JwtService) {}

  async signup(email: string, password: string) {
    const hashed: string = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), email, password: hashed };
    this.users.push(user);
    return {
      Message: 'user register',
    };
  }
  async login(email: string, password: string) {
    const user = this.users.find((u) => u.email === email);
    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Wrong Password');

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
