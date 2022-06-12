import {Request, Response, Router} from 'express'

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    res.send(products)
})
productsRouter.get('/:productTitle', (req: Request, res: Response) => {
    const productName = req.params.productTitle
    const product = products.find(p => p.title === productName)
    if(!product) {
        res.sendStatus(404)
    } else {
        res.send(product)
    }
    res.send(product)
})