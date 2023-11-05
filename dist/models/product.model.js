"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor({ id, productName, category_id, price, description }) {
        if (id !== undefined)
            this.id = id;
        if (productName !== undefined)
            this.productName = productName;
        if (price !== undefined)
            this.price = price;
        if (category_id !== undefined)
            this.category_id = category_id;
        if (description !== undefined)
            this.description = description;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map