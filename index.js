require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql')
const schema = require('./graphql/schema')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./config/passport')
const authRoutes = require('./routes/auth')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_KEYS],
  maxAge: 24 * 60 * 60 * 1000
}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/graph', expressGraphQL({
  graphiql: true,
  schema
}))

if (process.env.MODE === 'DEV') {
  app.use(
    (req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.setHeader('Access-Control-Allow-Credentials', true)
      next()
    }
  )
}
app.use('/auth', authRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(
    () => { console.log('Datbase Connected') },
    err => { throw new Error(err) }
  )
  .catch(
    err => { console.log(`Database connection error: ${err}`) }
  )
app.listen(port,
  () => { console.log(`App waitng for request on port: ${port}`) }
)
