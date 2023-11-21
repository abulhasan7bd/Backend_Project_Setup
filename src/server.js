/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const app = require('./app')
const { port } = require('./confiq/index')
// database
const connectDB = require('./database/connectdb')
connectDB()




          const data = "fffffff"







app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
