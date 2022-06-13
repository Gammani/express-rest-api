const sounds = [
    {id: 1, title: "hop hey"},
    {id: 2, title: "hey hey"},
    {id: 3, title: "hop hey la-la"},
    {id: 4, title: "hop hey la la"},
    {id: 5, title: "sound"},
    {id: 6, title: "sound for relax"},
    {id: 7, title: "sound for meditation"},
    {id: 8, title: "hip-hop"},
    {id: 9, title: "la la la"}
]

export const soundsRepository = {
    findSounds(title: string | null | undefined) {
        if(title) {
            let searchString = title.toString()
            let filteredSounds = sounds.filter(s => s.title.indexOf(searchString) > -1)
            return filteredSounds;
        } else {
            return sounds;
        }
    },
    findSoundById(id: number) {
        let sound = sounds.filter(s => s.id === id)
        return sound;
    },
    createSound(title: string) {
        const newSound = {
            id: +(new Date()),
            title: title
        }
        sounds.push(newSound)
        return newSound
    },
    updateSound(id: number, title: string) {
        let sound = sounds.find(s => s.id === id)
        if (sound) {
            sound.title = title
            return true
        } else {
            return false
        }
    },
    deleteSound(id: number) {
        const index = sounds.findIndex(s => s.id === id)
        if (index === -1) {
            return false
        } else {
            sounds.splice(index, 1)
            return true
        }
    }
}