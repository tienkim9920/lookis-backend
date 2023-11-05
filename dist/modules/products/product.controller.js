"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const response_service_1 = require("../../services/response.service");
const product_dto_1 = require("../../dto/product.dto");
const enum_1 = require("../../constant/enum");
const decorator_1 = require("../../constant/decorator");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    getProducts(res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.findAll(), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
    createProduct(product, res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.createProduct(product), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
    detailProduct(id, res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.findById(id), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
    updateProduct(id, product, res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.updateProduct(id, product), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
    deleteProduct(id, res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.deleteProduct(id), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
    getHomeProducts(page, search, res) {
        try {
            return res.json(new response_service_1.ResponseData(this.productService.findProductHome({ page, search }), enum_1.ServerStatus.OK, enum_1.ServerMessage.OK));
        }
        catch (error) {
            return res.json(new response_service_1.ResponseData(null, enum_1.ServerStatus.ERROR, enum_1.ServerMessage.ERROR));
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "detailProduct", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_dto_1.ProductDto, Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, common_1.Get)('/home/pagination'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "getHomeProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map