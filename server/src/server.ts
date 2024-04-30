import express,{Request,Response} from 'express' 
import cors from 'cors'

const app=express()
const PORT=4000
app.use(express.json())
app.use(cors())


app.get('/',(req:Request, res:Response)=>{
    res.send("App Running")
})

app.listen(PORT, ()=>{
    console.log('Server Running at http://localhost:4000')
})