const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false}))
app.use('/api',router)

const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
  res.send('Routing another application')
})

app.listen(port, ()=> console.log(`Server started on port ${port}`))