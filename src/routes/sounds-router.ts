import {Request, Response, Router} from "express";

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

export const soundsRouter = Router()

soundsRouter.get('/', (req: Request, res: Response) => {
    if(req.query.title) {
        const searchString = req.query.title.toString()
        res.send(sounds.filter(s => s.title.indexOf(searchString) > -1))
    } else {
        res.send(sounds)
    }
})
soundsRouter.get('/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const sound = sounds.filter(s => s.id === id)
    if(sound) {
        res.send(sound)
    } else {
        res.sendStatus(404)
    }
})
soundsRouter.delete('/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const index = sounds.findIndex(s => s.id === id)
    if(index === -1) {
        res.sendStatus(404)
    } else {
        res.send(sounds.splice(index, 1))
    }
})
soundsRouter.post('/', (req: Request, res: Response) => {
    const sound = {
        id: +(new Date()),
        title: req.body.title
    }
    sounds.push(sound)
    res.status(201).send(sound)
})
soundsRouter.put('/:id', (req: Request, res: Response) => {
    // const id = +req.params.id
    // if(id) {
    //     res.send(sounds.map(s => s.id === id ? {...s, title: req.body.title} : s))
    // } else {
    //     res.status(404)
    // }
    let sound = sounds.find(s => s.id === +req.params.id)
    if(sound) {
        sound.title = req.body.title
        res.send(sound)
    } else {
        res.sendStatus(404)
    }
})