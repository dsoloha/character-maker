import Ovaries, { IOvaries } from './Ovaries'

export default class Vagina {
  clitoris: string
  description: string
  labia: string
  ovaries: IOvaries

  constructor() {
    this.clitoris = 'average'
    this.description = 'average'
    this.labia = 'average'
    this.ovaries = new Ovaries()
  }
}

export interface IVagina {
  /** How large the character's clitoris is. */
  clitoris: string
  /** A description of the character's vagina. */
  description: string
  /** A description of the character's labia. */
  labia: string
  /** Properties pertaining to the character's ovaries. */
  ovaries: IOvaries
}
