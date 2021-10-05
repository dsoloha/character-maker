export default class Mouth {
  /** Properties pertaining to the character's teeth. */
  teeth: {
    count: number
    description: string
  }
  /** Whether or not the character has a tongue. */
  tongue: boolean

  constructor(options?: {
    teeth?: {
      count: number
      description: string
    }
    tongue?: boolean
  }) {
    this.teeth = options?.teeth ?? {
      count: 32,
      description: '',
    }
    this.tongue = options?.tongue ?? true
  }
}
