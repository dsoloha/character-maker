export default class Lips implements ILips {
  description: string

  constructor() {
    this.description = 'average'
  }
}

export interface ILips {
  /** A description of the character's lips. */
  description: string
}
