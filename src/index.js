const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())//use incoming json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'snowy', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'snowy')
    console.log(data)

}

myFunction()