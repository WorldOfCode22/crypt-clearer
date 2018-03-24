const passport = require('passport')
let Account = require('../db-models/account')
let LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

exports = passport
