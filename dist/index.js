"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const sounds_router_1 = require("./routes/sounds-router");
const addresses_router_1 = require("./routes/addresses-router");
const app = (0, express_1.default)();
//creat express app
const port = process.env.port || 5000;
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
app.use('/sounds', sounds_router_1.soundsRouter);
app.get('/test', (req, res, next) => {
    req.blabla = "hello";
    next();
}, (req, res) => {
});
//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map