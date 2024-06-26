import { Module } from '@nestjs/common';
import { ProductsModule } from './Products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
