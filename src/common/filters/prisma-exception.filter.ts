import { ArgumentsHost, Catch, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements GqlExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    
    switch (exception.code) {
      case 'P2002':
        throw new ConflictException('Este e-mail já está em uso.');
      case 'P2025':
        throw new NotFoundException('O registro solicitado não foi encontrado.');
      default:
        throw new BadRequestException('Erro na operação de banco de dados.');
    }
  }
}