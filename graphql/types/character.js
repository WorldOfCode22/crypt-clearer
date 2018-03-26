const {GraphQLObjectType, GraphQLString, GraphQLInt} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'character_Type',
  fields: {
    name: {type: GraphQLString},
    health: {type: GraphQLString},
    energy: {type: GraphQLString},
    level: {type: GraphQLInt},
    vision: {type: GraphQLInt},
    baseAttackDamage: {type: GraphQLInt},
    baseAttackCriticalChance: {type: GraphQLInt},
    baseAttackCriticalMultiplier: {type: GraphQLInt}
  }
})
