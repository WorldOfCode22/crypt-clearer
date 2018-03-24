const {GraphQLSchema} = require('graphql')
const root = require('./root')

exports = new GraphQLSchema({
  query: root
})
