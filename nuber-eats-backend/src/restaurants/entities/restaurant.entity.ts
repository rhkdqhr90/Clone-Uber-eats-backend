import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field(() => String)
  adress: string;

  @Field(() => String)
  ownerName: string;
}
