require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
  .then(
    () => { console.log('Welcome') },
    err => { throw new Error(err) }
  )
  .catch(
    err => { console.log(`DB Connection Error: ${err}`) }
  )

mongoose.connection.on('open',
  (ref) => {
    mongoose.connection.db.listCollections().toArray(
      (err, names) => {
        if (err) {
          console.log('error getting collecton list')
        } else {
          console.log(names)
        }
      }
    )
  }
)
