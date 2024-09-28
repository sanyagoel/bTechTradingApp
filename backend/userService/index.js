const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const helloRoutes = require('./routes/hello.route')
const userRoutes = require('./routes/user.route')
app.use('/api/v1/', helloRoutes)
app.use('/api/v1/user', userRoutes)


app.listen(3000, ()=>{
    console.log(`Server started at port 3000`)
})