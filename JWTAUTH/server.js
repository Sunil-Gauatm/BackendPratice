import express from 'express'
import authRouter from './route/auth.route.js'
import connection from './config/db.connection.js'

const app = express()
const port = 3000

app.use(express.json())
app.use('/auth', authRouter)


app.get('/', (req , res) => {
    res.send("JWT Backend running")

})

app.listen(port,()=>{
    connection;
    console.log("Backend Runnninngggggg")
})