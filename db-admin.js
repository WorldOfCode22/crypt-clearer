require('dotenv').config()
const mongojs = require('mongojs')
const inquirer = require('inquirer')

let db = mongojs(process.env.MONGO_URI)

PromiseCollectionNames()
  .then(
    (collection) => {
      let collect = ''
      let collectionQuestion = {
        type: 'list',
        name: 'collection',
        message: 'Please Pick A Collection',
        choices: collection
      }
      return inquirer.prompt([collectionQuestion])
        .then(
          (answer) => {
            collect = answer.collection
            return PromiseGetRecords(answer.collection)
          }
        )
        .then(
          (docs) => {
            let collectionViewArr = []
            docs.forEach(
              (doc) => {
                let viewObj = {}
                let docKeys = Object.keys(doc)
                viewObj[docKeys[0]] = doc[docKeys[0]]
                viewObj[docKeys[1]] = doc[docKeys[1]]
                collectionViewArr.push(JSON.stringify(viewObj))
              }
            )
            return collectionViewArr
          }
        )
        .then(
          (viewArr) => {
            let docQuestion = {
              type: 'list',
              message: 'Please Pick A Document To View',
              name: 'doc',
              choices: viewArr
            }
            inquirer.prompt([docQuestion])
              .then(
                (answer) => {
                  let doc = JSON.parse(answer.doc)
                  db[collect].findOne({_id: mongojs.ObjectId(doc._id)},
                    (err, doc) => {
                      if (err) {
                        console.log(err)
                      } else {
                        console.log(doc)
                      }
                    }
                  )
                }
              )
          }
        )
    }
  )

function PromiseCollectionNames () {
  return new Promise(
    (resolve, reject) => {
      db.getCollectionNames(
        (err, names) => {
          if (err) {
            reject(err)
          } else {
            resolve(names)
          }
        }
      )
    }
  )
}

function PromiseGetRecords (collection) {
  return new Promise(
    (resolve, reject) => {
      db[collection].find({},
        (err, docs) => {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        }
      )
    }
  )
}
