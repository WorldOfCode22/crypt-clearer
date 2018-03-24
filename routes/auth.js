const express = require('express')
const Account = require('../db-models/account')
const User = require('../db-models/user')
const router = express.Router()
const passport = require('passport')
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.json({message: 'loged in'})
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
            new User({
              username: req.body.username,
              timePlayed: 0
            }).save().then(
              (doc) => { res.json({done: 'User Registered'}) },
              err => { throw new Error(err) }
            )
          }
        )
      }
    )
  }
)
module.exports = router