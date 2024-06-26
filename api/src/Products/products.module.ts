import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./Entities/Product";
import { ProductsController } from "./Controllers/products.controller";
import { ProductsService } from "./Services/products.service";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'productsDB',
            entities: [Product],
            synchronize: false,
        }),
        TypeOrmModule.forFeature([Product]), 
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}