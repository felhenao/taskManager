const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const multer = require('multer')

const app = express()
const port = process.env.PORT || 3000

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }
        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())//use incoming json
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port)
})
