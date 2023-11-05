import { ProductDto } from 'src/dto/product.dto';
import { IProductRepository } from 'src/interfaces/IProductRepository.interface';
import { Product } from '../../models/product.model';
import { MetaParams } from 'src/constant/type';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: IProductRepository);
    findAll(): Product[];
    createProduct(product: ProductDto): Product;
    findById(id: number): Product;
    updateProduct(id: number, product: ProductDto): Product;
    deleteProduct(id: number): boolean;
    findProductHome(meta: MetaParams): Product[];
}
