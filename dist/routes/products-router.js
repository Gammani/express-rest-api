"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = require("express");
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRouter = (0, express_1.Router)({});
exports.productsRouter.get('/', (req, res) => {
    res.send(products);
});
exports.productsRouter.get('/:productTitle', (req, res) => {
    const productName = req.params.productTitle;
    const product = products.find(p => p.title === productName);
    if (!product) {
        res.sendStatus(404);
    }
    else {
        res.send(product);
    }
    res.send(product);
});
//# sourceMappingURL=products-router.js.map