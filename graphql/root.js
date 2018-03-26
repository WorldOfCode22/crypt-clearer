const UserType = require('./types/user')
const userResolver = require('./resolvers/root/user')
const {GraphQLObjectType, GraphQLString} = require('graphql')
module.exports = new GraphQLObjectType({
  name: 'Root_Query',
  fields: {
    user: {
      type: UserType,
      args: {
        username: {type: GraphQLString}
      },
      resolve (parentVal, args) {
        return userResolver(parentVal, args)
      }
    }
  }
})
