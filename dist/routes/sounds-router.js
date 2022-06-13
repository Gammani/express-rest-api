"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundsRouter = void 0;
const express_1 = require("express");
const sounds_repository_1 = require("../repositories/sounds-repository");
exports.soundsRouter = (0, express_1.Router)();
exports.soundsRouter.get('/', (req, res) => {
    var _a;
    const foundSounds = sounds_repository_1.soundsRepository.findSounds((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundSounds);
});
exports.soundsRouter.get('/:id', (req, res) => {
    const sound = sounds_repository_1.soundsRepository.findSoundById(+req.params.id);
    if (sound) {
        res.send(sound);
    }
    else {
        res.sendStatus(404);
    }
});
exports.soundsRouter.post('/', (req, res) => {
    const sound = sounds_repository_1.soundsRepository.createSound(req.body.title);
    res.sendStatus(201).send(sound);
});
exports.soundsRouter.put('/:id', (req, res) => {
    const isUpdated = sounds_repository_1.soundsRepository.updateSound(+req.params.id, req.body.title);
    if (isUpdated) {
        const sound = sounds_repository_1.soundsRepository.findSoundById(+req.params.id);
        res.send(sound);
    }
    else {
        res.sendStatus(404);
    }
});
exports.soundsRouter.delete('/:id', (req, res) => {
    const isDeleted = sounds_repository_1.soundsRepository.deleteSound(+req.params.id);
    if (isDeleted) {
        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=sounds-router.js.map