// express 모듈 가져옴
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello world 하위하위'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))