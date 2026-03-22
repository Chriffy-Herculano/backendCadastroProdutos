import { Field, Float, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => Float)
  price!: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt!: Date;
}
