const {GraphQLObjectType, GraphQLString} = require('graphql')

exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    Username: {type: GraphQLString},
    DateJoined: {type: GraphQLString},
    TimePlayed: {type: GraphQLString}
  }
})
