"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
const addresses = [{ id: 1, value: 'Nezalejnasti 12' }, { id: 2, value: 'Selickaga 11' }];
exports.addressesRepository = {
    findAddresses(value) {
        if (value) {
            const filteredAddresses = addresses.filter(a => a.value.indexOf(value) > -1);
            return filteredAddresses;
        }
        else {
            return addresses;
        }
    },
    findAddressById(id) {
        let address = addresses.find(a => a.id === id);
        return address;
    },
    createAddress(value) {
        const newAddress = {
            id: +new Date(),
            value: value
        };
        addresses.push(newAddress);
        return newAddress;
    },
    updateAddress(id, value) {
        let address = addresses.find(a => a.id === id);
        if (address) {
            address.value = value;
            return true;
        }
        else {
            return false;
        }
    },
    deleteAddress(id) {
        const index = addresses.findIndex(a => a.id === id);
        if (index === -1) {
            return false;
        }
        else {
            addresses.splice(index, 1);
            return true;
        }
    }
};
//# sourceMappingURL=addresses-repository.js.map