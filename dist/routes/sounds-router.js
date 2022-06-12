"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundsRouter = void 0;
const express_1 = require("express");
const sounds = [
    { id: 1, title: "hop hey" },
    { id: 2, title: "hey hey" },
    { id: 3, title: "hop hey la-la" },
    { id: 4, title: "hop hey la la" },
    { id: 5, title: "sound" },
    { id: 6, title: "sound for relax" },
    { id: 7, title: "sound for meditation" },
    { id: 8, title: "hip-hop" },
    { id: 9, title: "la la la" }
];
exports.soundsRouter = (0, express_1.Router)();
exports.soundsRouter.get('/', (req, res) => {
    if (req.query.title) {
        const searchString = req.query.title.toString();
        res.send(sounds.filter(s => s.title.indexOf(searchString) > -1));
    }
    else {
        res.send(sounds);
    }
});
exports.soundsRouter.get('/:id', (req, res) => {
    const id = +req.params.id;
    const sound = sounds.filter(s => s.id === id);
    if (sound) {
        res.send(sound);
    }
    else {
        res.sendStatus(404);
    }
});
exports.soundsRouter.delete('/:id', (req, res) => {
    const id = +req.params.id;
    const index = sounds.findIndex(s => s.id === id);
    if (index === -1) {
        res.sendStatus(404);
    }
    else {
        res.send(sounds.splice(index, 1));
    }
});
exports.soundsRouter.post('/', (req, res) => {
    const sound = {
        id: +(new Date()),
        title: req.body.title
    };
    sounds.push(sound);
    res.status(201).send(sound);
});
exports.soundsRouter.put('/:id', (req, res) => {
    // const id = +req.params.id
    // if(id) {
    //     res.send(sounds.map(s => s.id === id ? {...s, title: req.body.title} : s))
    // } else {
    //     res.status(404)
    // }
    let sound = sounds.find(s => s.id === +req.params.id);
    if (sound) {
        sound.title = req.body.title;
        res.send(sound);
    }
    else {
        res.sendStatus(404);
    }
});
//# sourceMappingURL=sounds-router.js.map