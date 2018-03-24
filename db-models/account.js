const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
let account = new mongoose.Schema({
  username: String,
  password: String
})

account.plugin(passportLocalMongoose)
module.exports = mongoose.model('account', account)
