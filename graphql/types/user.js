const Characters = require('./character')
const {GraphQLObjectType, GraphQLString, GraphQLList} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    username: {type: GraphQLString},
    dateJoined: {type: GraphQLString},
    timePlayed: {type: GraphQLString},
    characters: {type: GraphQLList(Characters)}
  }
})
