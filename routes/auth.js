const express = require('express')
const Account = require('../db-models/account')
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
          () => { console.log('User Registered'); res.json({done: 'User Added'}) }
        )
      }
    )
  }
)
module.exports = router
