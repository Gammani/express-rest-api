import {Request, Response, Router} from "express"
import {soundsRouter} from "./sounds-router";

const addresses = [{id: 1, value: 'Nezalejnasti 12'}, {id: 2, value: 'Selickaga 11'}]

export const addressesRouter = Router()

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const address = addresses.find(a => a.id === id)
    if(address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})
addressesRouter.delete('/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const index = addresses.findIndex(s => s.id === id)
    if(index === -1) {
        res.sendStatus(404)
    } else {
        res.send(addresses.splice(index, 1))
    }
})
addressesRouter.post('/', (req: Request, res: Response) => {
    const address = {
        id: +(new Date()),
        value: req.body.title
    }
    addresses.push(address)
    res.status(201).send(address)
})
addressesRouter.put('/:id', (req: Request, res: Response) => {
    // const id = +req.params.id
    // if(id) {
    //     res.send(sounds.map(s => s.id === id ? {...s, title: req.body.title} : s))
    // } else {
    //     res.status(404)
    // }
    let address = addresses.find(s => s.id === +req.params.id)
    if(address) {
        address.value = req.body.value
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})