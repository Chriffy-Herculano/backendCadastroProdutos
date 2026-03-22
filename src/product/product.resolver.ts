import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from '../product/create-product.input';
import { UpdateProductInput } from '../product/update-product.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [Product])
  async products() {
    return await this.prisma.product.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Product)
  async createProduct(@Args('data') data: CreateProductInput) {
    return await this.prisma.product.create({
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Product)
  async updateProduct(@Args('data') data: UpdateProductInput) {
    const { id, ...rest } = data;
    return await this.prisma.product.update({
      where: { id },
      data: rest,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Product)
  deleteProduct(@Args('id') id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
