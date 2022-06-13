"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products_repository_1 = require("../repositories/products-repository");
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', (req, res) => {
    var _a;
    const foundProducts = products_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProducts);
});
exports.productsRouter.get('/:id', (req, res) => {
    let product = products_repository_1.productsRepository.findProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.get('/:productTitle', (req, res) => {
    const product = products_repository_1.productsRepository.findProductByTitle(req.body.title);
    if (!product) {
        res.sendStatus(404);
    }
    else {
        res.send(product);
    }
});
exports.productsRouter.post('/', (req, res) => {
    const newProduct = products_repository_1.productsRepository.creatProduct(req.body.title);
    res.sendStatus(201).send(newProduct);
});
exports.productsRouter.put('/:id', (req, res) => {
    const isUpdated = products_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    if (isUpdated) {
        const product = products_repository_1.productsRepository.findProductById(+req.params.id);
        res.send(product);
    }
    else {
        res.sendStatus(404);
    }
});
exports.productsRouter.delete('/:id', (req, res) => {
    const isDeleted = products_repository_1.productsRepository.deleteProduct(+req.params.id);
    if (isDeleted) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=products-router.js.map