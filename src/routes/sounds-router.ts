import {Request, Response, Router} from "express";
import {soundsRepository} from "../repositories/sounds-repository";


export const soundsRouter = Router()

soundsRouter.get('/', (req: Request, res: Response) => {
    const foundSounds = soundsRepository.findSounds(req.query.title?.toString())
    res.send(foundSounds)
})
soundsRouter.get('/:id', (req: Request, res: Response) => {
    const sound = soundsRepository.findSoundById(+req.params.id)
    if(sound) {
        res.send(sound)
    } else {
        res.sendStatus(404)
    }
})
soundsRouter.post('/', (req: Request, res: Response) => {
    const sound = soundsRepository.createSound(req.body.title)
    res.sendStatus(201).send(sound)
})
soundsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = soundsRepository.updateSound(+req.params.id, req.body.title)
    if(isUpdated) {
        const sound = soundsRepository.findSoundById(+req.params.id)
        res.send(sound)
    } else {
        res.sendStatus(404)
    }
})
soundsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = soundsRepository.deleteSound(+req.params.id)
    if(isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})