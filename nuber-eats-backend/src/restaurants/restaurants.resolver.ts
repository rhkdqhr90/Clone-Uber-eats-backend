import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver()
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
