const User = require('../../../db-models/user')
module.exports = (parentVal, args) => {
  return User.findOne({username: args.username})
    .then(
      (doc) => {
        if (doc) {
          return doc
        } else {
          throw new Error('No Such User')
        }
      },
      err => { throw new Error(err) }
    )
}
