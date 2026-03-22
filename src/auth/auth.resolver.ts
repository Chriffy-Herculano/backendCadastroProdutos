import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseFilters, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { PrismaExceptionFilter } from '../common/filters/prisma-exception.filter';
import { AuthResponse } from './models/auth-response.model';
import { LoginInput } from './dto/login.input';

@UseFilters(PrismaExceptionFilter)
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(() => AuthResponse)
  async register(
    @Args('data') data: CreateUserInput,
  ) {
    return this.authService.register(data.email, data.password);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  async updateUser(@Args('data') data: UpdateUserInput, @CurrentUser() user: { userId: string }) {
    return this.authService.update(user.userId, data);
  }

  // @Mutation(() => String)
  // async login(
  //   @Args('data', { type: () => CreateUserInput })
  //   data: CreateUserInput,
  // ): Promise<string> {
  //   const result = await this.authService.login(data.email, data.password);

  //   return result.access_token;
  // }

  @Mutation(() => AuthResponse)
  async login(
    @Args('data') data: LoginInput,
  ) {
    return this.authService.login(data.email, data.password);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async logout() {
    return true;
  }
}
