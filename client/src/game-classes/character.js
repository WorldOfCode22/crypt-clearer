class Character {
  constructor (name = 'default',
    health = 100,
    energy = 100,
    level = 0,
    vision = 1,
    baseAttackDamage = 100.0,
    baseAttackCriticalChance = 10.0,
    baseAttackCriticalMultiplier = 2.0,
    currentAttrPoints = 5,
    attrPointsPerLevel = 5) {
    this.name = name
    this.health = health
    this.energy = energy
    this.level = level
    this.vision = vision
    this.baseAttackDamage = baseAttackDamage
    this.baseAttackCriticalChance = baseAttackCriticalChance
    this.baseAttackCriticalMultiplier = baseAttackCriticalMultiplier
    this.currentAttrPoints = currentAttrPoints
    this.attrPointsPerLevel = attrPointsPerLevel
  }
}

export default Character
