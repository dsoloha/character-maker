export default class Teeth implements ITeeth {
  count: number
  description: string

  constructor() {
    this.count = 32
    this.description = 'normal'
  }
}

export interface ITeeth {
  /** How many teeth the character has, out of 32. */
  count?: number
  /** A description of the character's teeth. */
  description?: string
}
