const {GraphQLSchema} = require('graphql')
const root = require('./root')

module.exports = new GraphQLSchema({
  query: root
})
