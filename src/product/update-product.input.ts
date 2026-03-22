import { Field, Float, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput {
  @Field(() => ID)
  id!: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field({ nullable: true })
  description?: string;
}
