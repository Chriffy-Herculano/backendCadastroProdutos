import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'segredo-super-forte',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, AuthResolver, PrismaService, JwtStrategy],
})
export class AuthModule {}
