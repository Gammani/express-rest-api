"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundsRepository = void 0;
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
exports.soundsRepository = {
    findSounds(title) {
        if (title) {
            let searchString = title.toString();
            let filteredSounds = sounds.filter(s => s.title.indexOf(searchString) > -1);
            return filteredSounds;
        }
        else {
            return sounds;
        }
    },
    findSoundById(id) {
        let sound = sounds.filter(s => s.id === id);
        return sound;
    },
    createSound(title) {
        const newSound = {
            id: +(new Date()),
            title: title
        };
        sounds.push(newSound);
        return newSound;
    },
    updateSound(id, title) {
        let sound = sounds.find(s => s.id === id);
        if (sound) {
            sound.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteSound(id) {
        const index = sounds.findIndex(s => s.id === id);
        if (index === -1) {
            return false;
        }
        else {
            sounds.splice(index, 1);
            return true;
        }
    }
};
//# sourceMappingURL=sounds-repository.js.map