const mongoose = require('mongoose')

let user = new mongoose.Schema({
  username: String,
  dateJoined: { type: Date, default: Date.now },
  timePlayed: Number
})

module.exports = mongoose.model('user', user)
