import { Controller, Delete, Get, Post, Body, Param } from "@nestjs/common";
import { ProductsService } from "../Services/products.service";
import { Product } from "../Entities/Product";

@Controller()
export class ProductsController{
    constructor(private readonly productsService: ProductsService) {}

    @Get('/products')
    async getAllProducts(): Promise<Product[]>{
        return this.productsService.getAll();
    }

    @Get('/product/:id')
    async getProduct(@Param('id') id: number): Promise<Product>{
        return this.productsService.getOne(id);
    }

    @Post('/create')
    async createProduct(@Body() product: Product): Promise<Product>{
        return this.productsService.create(product);
    }

    @Delete('/remove/:id')
    async deleteProduct(@Param('id') id: number): Promise<void>{
        return this.productsService.remove(id);
    }
}
