import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "../Entities/Product";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService{
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

    getOne(id: number): Promise<Product | null>{
        return this.productRepository.findOneBy({id});
    }

    getAll(): Promise<Product[]>{
        return this.productRepository.find();
    }

    async create(product: Product): Promise<Product>{
        const newProduct = this.productRepository.create({
            title: product.title,
            description: product.description,
            price: product.price,
        });
        return await this.productRepository.save(newProduct);
    }

    async remove(id: number): Promise<void>{
        await this.productRepository.delete({id});
    }
}