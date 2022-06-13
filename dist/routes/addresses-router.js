"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses_repository_1 = require("../repositories/addresses-repository");
exports.addressesRouter = (0, express_1.Router)();
exports.addressesRouter.get('/', (req, res) => {
    var _a;
    const foundAddresses = addresses_repository_1.addressesRepository.findAddresses((_a = req.query.value) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundAddresses);
});
exports.addressesRouter.get('/:id', (req, res) => {
    const address = addresses_repository_1.addressesRepository.findAddressById(+req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.sendStatus(404);
    }
});
exports.addressesRouter.post('/', (req, res) => {
    const newAddress = addresses_repository_1.addressesRepository.createAddress(req.body.value);
    res.sendStatus(201).send(newAddress);
});
exports.addressesRouter.put('/:id', (req, res) => {
    const isUpdated = addresses_repository_1.addressesRepository.updateAddress(+req.params.id, req.body.value);
    if (isUpdated) {
        const address = addresses_repository_1.addressesRepository.findAddressById(+req.params.id);
        res.send(address);
    }
    else {
        res.send(404);
    }
});
exports.addressesRouter.delete('/:id', (req, res) => {
    const isDelete = addresses_repository_1.addressesRepository.deleteAddress(+req.params.id);
    if (isDelete) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=addresses-router.js.map