export class Family implements IFamily {
  father: number
  mother: number
  siblings: number[]

  constructor() {
    this.father = 0
    this.mother = 0
    this.siblings = []
  }
}

export class Partners implements IPartners {
  current: number[]
  previous: number[]

  constructor() {
    this.current = []
    this.previous = []
  }
}

export default class Relations implements IRelations {
  all: number[]
  enemies: number[]
  family: IFamily
  friends: number[]
  partners: IPartners

  constructor() {
    this.all = []
    this.enemies = []
    this.family = new Family()
    this.friends = []
    this.partners = new Partners()
  }
}

export interface IFamily {
  /** The ID of the character's father. */
  father: number
  /** The ID of the character's mother. */
  mother: number
  /** The IDs of any character that shares at least one parent with this character. */
  siblings: number[]
}

export interface IPartners {
  /** The IDs of this character's current partners. */
  current: number[]
  /** The IDs of this character's previous partners. */
  previous: number[]
}

export interface IRelations {
  /** The ID of every character this character has met. */
  all: number[]
  /** Whether or not the character has vocal cords. */
  enemies: number[]
  /** Properties pertaining to the character's family. */
  family: IFamily
  /** The IDs of this character's friends. */
  friends: number[]
  /** Properties pertaining to the character's partners. */
  partners: IPartners
}
