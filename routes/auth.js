require('dotenv')
const express = require('express')
const Account = require('../db-models/account')
const User = require('../db-models/user')
const router = express.Router()
const passport = require('passport')

router.get('/login',
  (req, res) => {
    if (process.env.MODE) {
      res.redirect('http://localhost:3000')
    }
  }
)
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    // console.log(process.env.MODE)
    if (process.env.MODE === 'DEV') {
      res.redirect('http://localhost:3000/')
    }
  })

router.post('/register',
  (req, res) => {
    Account.register(new Account({username: req.body.username}), req.body.password,
      (err, account) => {
        if (err) {
          console.log(`User Register Error: ${err}`)
          res.json({error: 'An error occured during registration'})
        }
        passport.authenticate('local')(req, res,
          () => {
            if (account) {
              new User({
                username: req.body.username,
                timePlayed: 0,
                characters: []
              }).save().then(
                (doc) => { res.json({done: 'User Registered'}) },
                err => { throw new Error(err) }
              )
            }
          }
        )
      }
    )
  }
)
module.exports = router
