/* eslint-disable no-undef */
const app = require('./app')
const { port } = require('./confiq/index')
// database
const connectDB = require('./database/connectdb')
connectDB()






const ffff = 222222222





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
