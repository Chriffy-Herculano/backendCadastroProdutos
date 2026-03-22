import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ProductResolver, PrismaService],
})
export class ProductModule {}
