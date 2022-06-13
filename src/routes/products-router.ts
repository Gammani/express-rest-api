import {Request, Response, Router} from 'express'
import {productsRepository} from "../repositories/products-repository";

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProducts)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = productsRepository.findProductById(+req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.sendStatus(404)
    }
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.creatProduct(req.body.title)
    res.sendStatus(201).send(newProduct)
})
productsRouter.get('/:productTitle', (req: Request, res: Response) => {
    const product = productsRepository.findProductByTitle(req.body.title)
    if (!product) {
        res.sendStatus(404)
    } else {
        res.send(product)
    }
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    const isUpdated = productsRepository.updateProduct(+req.params.id, req.body.title)
    if (isUpdated) {
        const product = productsRepository.findProductById(+req.params.id)
        res.send(product)
    } else {
        res.sendStatus(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    const isDeleted = productsRepository.deleteProduct(+req.params.id)
    if(isDeleted) {
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})