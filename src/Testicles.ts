export default class Testicles implements ITesticles {
  description: string
  potent: boolean

  constructor() {
    this.description = 'average'
    this.potent = true
  }
}

export interface ITesticles {
  /** A description of the character's testicles. */
  description: string
  /** Whether the testicles are potent. */
  potent: boolean
}
