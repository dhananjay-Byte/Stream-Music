require('dotenv').config()
const Express = require('express')
const app = Express();


const port = process.env.PORT
app.get('/',(req,res)=>{
    res.send("<h1>Hello world");
})


app.listen(port,()=>{
    console.log(`Server is Running on ${port}`)
})