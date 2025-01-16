export default class Face implements IFace {
  attractiveness: number
  description: string

  constructor() {
    this.attractiveness = 50
    this.description = 'average'
  }
}

export interface IFace {
  /** The character's attractiveness, on a scale from 1-100. */
  attractiveness?: number
  /** A description of the character's face. */
  description?: string
}
