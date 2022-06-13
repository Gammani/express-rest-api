import express, {NextFunction, Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {soundsRouter} from "./routes/sounds-router";
import {addressesRouter} from "./routes/addresses-router";
const app = express()

//creat express app
const port = process.env.port || 5000
app.use(bodyParser.json())





//include test-middleware
const blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    req.blabla = "hello";
    next();
};
const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.query.token === "123") {
        next();
    } else {
        res.sendStatus(401)
    }
}
let requestCounter = 0;
const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
    requestCounter++;
    next();
}

app.use(blablaMiddleware)
// app.use(authGuardMiddleware) // может прервать дальнешую цепочку
// app.use(requestCounterMiddleware)
app.get('/test', (req: Request, res: Response) => {
    // @ts-ignore
    const blabla = req.blabla;
    res.send({value: blabla + "!!!" + requestCounter})
})
// without include
// app.get('/test', blablaMiddleware, (req: Request, res: Response) => {
//     // @ts-ignore
//     const blabla = req.blabla;
//     res.send({value: blabla + "!!!"})
// })





app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.use('/sounds', soundsRouter)



//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})