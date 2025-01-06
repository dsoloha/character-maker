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
  clitoris: string
  description: string
  labia: string
  ovaries: IOvaries
}
