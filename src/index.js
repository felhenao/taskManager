const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disabled')

//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// } )

app.use(express.json())//use incoming json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('601999c79fbd4609fa0fbe99')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('601998f15e6deb0990e69a15')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()