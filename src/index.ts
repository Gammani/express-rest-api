import express, {Request, Response} from 'express'
import bodyParser from "body-parser";
const app = express()

//creat express app
const port = process.env.port || 5000
app.use(bodyParser.json())


const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Nezalejnasti 12'}, {id: 2, value: 'Selickaga 11'}]
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

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
    const productName = req.params.productTitle
    const product = products.find(p => p.title === productName)
    if(!product) {
        res.sendStatus(404)
    } else {
        res.send(product)
    }
    res.send(product)
})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const address = addresses.find(a => a.id === id)
    if(address) {
        res.send(address)
    } else {
        res.sendStatus(404)
    }
})

app.get('/sounds', (req: Request, res: Response) => {
    if(req.query.title) {
        const searchString = req.query.title.toString()
        res.send(sounds.filter(s => s.title.indexOf(searchString) > -1))
    } else {
        res.send(sounds)
    }
})
app.get('/sounds/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const sound = sounds.filter(s => s.id === id)
    if(sound) {
        res.send(sound)
    } else {
        res.sendStatus(404)
    }
})
app.delete('/sounds/:id', (req: Request, res: Response) => {
    const id = +req.params.id
    const index = sounds.findIndex(s => s.id === id)
    if(index === -1) {
        res.sendStatus(404)
    } else {
        res.send(sounds.splice(index, 1))
    }
})

app.post('/sounds', (req: Request, res: Response) => {
    const sound = {
        id: +(new Date()),
        title: req.body.title
    }
    sounds.push(sound)
    res.status(201).send(sound)
})
app.put('/sounds/:id', (req: Request, res: Response) => {
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


//start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})