const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
  res.send('Hello, Vitor!')
})

app.listen(3333)