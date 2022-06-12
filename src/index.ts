import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {soundsRouter} from "./routes/sounds-router";
import {addressesRouter} from "./routes/addresses-router";
const app = express()

//creat express app
const port = process.env.port || 5000
app.use(bodyParser.json())


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