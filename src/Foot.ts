import { gaussian, random } from '../lib/number'

export default class Foot implements IFoot {
  toes: number

  constructor(options?: IFoot) {
    this.toes = options?.toes ?? 5
  }

  generateToes(): number {
    return gaussian(1, 100) > 98 ? random(1, 4) : 5
  }

  generate(): IFoot {
    return {
      toes: this.generateToes(),
    }
  }
}

export interface IFoot {
  /** How many toes the foot has. */
  toes?: number
}
