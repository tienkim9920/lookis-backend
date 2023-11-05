import { ProductService } from './product.service';
import { Response } from 'express';
import { ResponseType } from 'src/constant/type';
import { Product } from '../../models/product.model';
import { ProductDto } from 'src/dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(res: Response): ResponseType<Product>;
    createProduct(product: ProductDto, res: Response): ResponseType<Product>;
    detailProduct(id: number, res: Response): ResponseType<Product>;
    updateProduct(id: number, product: ProductDto, res: Response): ResponseType<Product>;
    deleteProduct(id: number, res: Response): ResponseType<Product>;
    getHomeProducts(page: string, search: string, res: Response): ResponseType<Product>;
}
