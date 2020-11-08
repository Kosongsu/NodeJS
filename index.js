// express 모듈 가져옴
const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://songsu:qorak1@boilerplate.1h9ef.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))





app.get('/', (req, res) => res.send('Hello world 하위하위'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))