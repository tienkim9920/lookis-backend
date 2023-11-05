"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository {
    constructor() {
        this.products = [
            { id: 1, productName: 'Pizza Phô Mai', category_id: 1, description: 'Phô mai, muối', price: '199000' },
            { id: 2, productName: 'Pizza Thịt Bầm', category_id: 1, description: 'Thịt bầm, sốt cà chua', price: '200000' },
            { id: 3, productName: 'Pizza Hải Sản', category_id: 1, description: 'Vị tôm, cua', price: '250000' },
            { id: 4, productName: 'Pizza Hongkong', category_id: 2, description: 'Vị sa tế, thơm ngon', price: '300000' },
            { id: 5, productName: 'Pizza Nấm Chua', category_id: 2, description: 'Nấm xào', price: '150000' },
            { id: 6, productName: 'Pizza Kim Chi', category_id: 2, description: 'Vị kim chi', price: '270000' },
            { id: 7, productName: 'Pizza Củ Cải', category_id: 2, description: 'Vị củ cải', price: '170000' },
            { id: 8, productName: 'Pizza Thượng Hải', category_id: 2, description: 'Vị sa bò, thơm ngon', price: '300000' },
            { id: 9, productName: 'Pizza Cua', category_id: 2, description: 'Vị cua biển', price: '350000' },
            { id: 10, productName: 'Pizza Mực', category_id: 2, description: 'Vị mực biển', price: '330000' },
            { id: 11, productName: 'Pizza Tôm', category_id: 2, description: 'Vị tôm biển', price: '360000' },
            { id: 12, productName: 'Pizza Ốc', category_id: 2, description: 'Vị ốc biển', price: '290000' },
        ];
    }
    findAll() {
        return this.products;
    }
    create(data) {
        const product = {
            id: Math.random(),
            ...data
        };
        this.products.push(product);
        return product;
    }
    findById(id) {
        const index = this.products.findIndex(item => +item?.id === +id);
        return this.products[index];
    }
    update(id, data) {
        const index = this.products.findIndex(item => +item?.id === +id);
        this.products[index].productName = data.productName;
        this.products[index].price = data.price;
        this.products[index].description = data.description;
        this.products[index].category_id = data.category_id;
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(item => +item?.id === +id);
        if (index !== 1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
    findProductHome(meta) {
        const limit = 3;
        const end = Number(meta.page) * limit;
        if (!meta.search) {
            const start = (Number(meta.page) - 1) * limit;
            const newProducts = this.products.slice(start, end);
            return newProducts;
        }
        else {
            let searchProducts = this.products.slice(0, end);
            return searchProducts.filter(item => item.productName.toUpperCase().indexOf(meta.search.toUpperCase()) !== -1);
        }
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)()
], ProductRepository);
//# sourceMappingURL=product.repository.js.map