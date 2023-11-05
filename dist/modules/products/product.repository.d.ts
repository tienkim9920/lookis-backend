import { IProductRepository } from "src/interfaces/IProductRepository.interface";
import { Product } from "../../models/product.model";
import { ProductDto } from 'src/dto/product.dto';
import { MetaParams } from 'src/constant/type';
export declare class ProductRepository implements IProductRepository {
    private products;
    findAll(): Product[];
    create(data: Partial<Product>): Product;
    findById(id: number): Product;
    update(id: number, data: Partial<ProductDto>): Product;
    delete(id: number): boolean;
    findProductHome(meta: MetaParams): Product[];
}
