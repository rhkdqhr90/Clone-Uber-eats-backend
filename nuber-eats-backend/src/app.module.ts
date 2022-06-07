import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurnatsModule } from './restaurants/retaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    RestaurnatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
