import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  // async register(email: string, password: string) {
  //   const hash = await bcrypt.hash(password, 10);

  //   const user = await this.prisma.user.create({
  //     data: { email, password: hash },
  //   });

  //   return user;
  // }

  // async register(email: string, password: string) {
  //   const hashed = await bcrypt.hash(password, 10);

  //   const user = await this.prisma.user.create({
  //     data: {
  //       email,
  //       password: hashed,
  //     },
  //   });

  //   const payload = { sub: user.id, email: user.email };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //     user,
  //   };
  // }

  async register(email: string, password: string) {
    const exists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      throw new Error('Email já existe');
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { email, password: hash },
    });

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async update(id: string, data: UpdateUserInput) {

    const { id: _, ...updateData } = data;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });

  }

  // async login(
  //   email: string,
  //   password: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.prisma.user.findUnique({
  //     where: { email },
  //   });

  //   if (!user) throw new Error('Usuário não encontrado');

  //   const valid = await bcrypt.compare(password, user.password);

  //   if (!valid) throw new Error('Senha inválida');

  //   return {
  //     access_token: this.jwtService.sign({ userId: user.id }),
  //   };
  // }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Senha inválida');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async logout() { }
}
