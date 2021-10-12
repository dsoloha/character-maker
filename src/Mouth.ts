export default class Mouth implements IMouth {
  teeth: {
    count: number
    description: string
  }
  tongue: boolean

  constructor(options?: IMouth) {
    this.teeth = options?.teeth ?? {
      count: 32,
      description: '',
    }
    this.tongue = options?.tongue ?? true
  }
}

export interface IMouth {
  /** Properties pertaining to the character's teeth. */
  teeth?: {
    /** How many teeth the character has, out of 32. */
    count: number
    /** A description of the character's teeth. */
    description: string
  }
  /** Whether or not the character has a tongue. */
  tongue?: boolean
}
