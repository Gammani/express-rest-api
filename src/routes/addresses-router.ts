import {Request, Response, Router} from "express"
import {addressesRepository} from "../repositories/addresses-repository";


export const addressesRouter = Router()

addressesRouter.get('/', (req: Request, res: Response) => {
    const foundAddresses = addressesRepository.findAddresses(req.query.value?.toString())
    res.send(foundAddresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    const address = addressesRepository.findAddressById(+req.params.id)
    if(address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})
addressesRouter.post('/', (req: Request, res: Response) => {
    const newAddress = addressesRepository.createAddress(req.body.value)
    res.sendStatus(201).send(newAddress)
})
addressesRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = addressesRepository.updateAddress(+req.params.id, req.body.value)
    if(isUpdated) {
        const address = addressesRepository.findAddressById(+req.params.id)
        res.send(address)
    } else {
        res.send(404)
    }
})
addressesRouter.delete('/:id', (req: Request, res: Response) => {
    const isDelete = addressesRepository.deleteAddress(+req.params.id)
    if(isDelete) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})
