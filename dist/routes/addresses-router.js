"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Nezalejnasti 12' }, { id: 2, value: 'Selickaga 11' }];
exports.addressesRouter = (0, express_1.Router)();
exports.addressesRouter.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    const id = +req.params.id;
    const address = addresses.find(a => a.id === id);
    if (address) {
        res.send(address);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=addresses-router.js.map