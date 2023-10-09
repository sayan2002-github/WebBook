const connectToMongo = require('./dbConnection');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

// Middleware
app.use(cors())
app.use(express.json())

//Avaliable routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})