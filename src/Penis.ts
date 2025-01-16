import Testicles, { ITesticles } from './Testicles'

export default class Penis {
  description: string
  girth: number
  length: number
  foreskin: boolean
  testicles: ITesticles

  constructor() {
    this.description = 'average'
    this.girth = 0
    this.length = 0
    this.foreskin = true
    this.testicles = new Testicles()
  }
}

export interface IPenis {
  /** A description of the character's penis. */
  description: string
  /** How thick the character's penis is, in cm. */
  girth: number
  /** How long the character's penis is, in cm. */
  length: number
  /** Whether the character's foreskin is intact. */
  foreskin: boolean
  /** Properties pertaining to the character's testicles. */
  testicles: ITesticles
}
