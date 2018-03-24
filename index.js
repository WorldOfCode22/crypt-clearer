require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const expressGraphQL = require('express-graphql')
const schema = require('./graphql/schema')

app.use('/graph', expressGraphQL({
  graphiql: true,
  schema
}))

app.listen(port,
  () => { console.log(`App waitng for request on port: ${port}`) }
)
