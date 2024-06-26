import { ProductsController } from "./Controllers/products.controller";
import { ProductsService } from "./Services/products.service";
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from "./Entities/Product";
import { Repository } from 'typeorm'; 
import { getRepositoryToken } from '@nestjs/typeorm'; 

describe('ProductsController', () => {
    let productsController: ProductsController;
    let productsService: ProductsService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [
                ProductsService,
                {
                    provide: getRepositoryToken(Product), 
                    useClass: Repository, 
                },
            ],
        }).compile();

        productsController = module.get<ProductsController>(ProductsController);
        productsService = module.get<ProductsService>(ProductsService);
    });

    afterEach(async () => {
        await module.close();
    });

    it('should return all products', async () => {
        const products: Product[] = [
            { id: 1, title: 'Product 1', description: 'Description 1', price: 100 },
            { id: 2, title: 'Product 2', description: 'Description 2', price: 200 },
        ];
        jest.spyOn(productsService, 'getAll').mockResolvedValue(products);
        expect(await productsController.getAllProducts()).toEqual(products);
    });

    it('should return a product by id', async () => {
        const productId = 1;
        const product: Product = { id: productId, title: 'Product 1', description: 'Description 1', price: 100 };
        jest.spyOn(productsService, 'getOne').mockResolvedValue(product);

        expect(await productsController.getProduct(productId)).toEqual(product);
    });

    it('should create a new product', async () => {
        const newProduct: Product = { id: 1, title: 'New Product', description: 'New Description', price: 200 };
        jest.spyOn(productsService, 'create').mockResolvedValue(newProduct);

        expect(await productsController.createProduct(newProduct)).toEqual(newProduct);
    });

    it('should delete a product by id', async () => {
        const productId = 1;
        jest.spyOn(productsService, 'remove').mockResolvedValue();

        await expect(productsController.deleteProduct(productId)).resolves.toBeUndefined();
    });
});