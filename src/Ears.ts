import '../lib/array'
import { gaussian } from '../lib/number'

export default class Ears implements IEars {
  left: IEar
  right: IEar

  constructor() {
    this.left = this.generate()
    this.right = this.generate()

    if (this.left.hearing !== this.right.hearing) {
      if (gaussian(1, 100) < 95) {
        this.left.hearing = this.right.hearing
      }
    }
  }

  /** Generates how well the ear can hear. */
  private generateHearing(): number {
    return gaussian(1, 100, 0.25)
  }

  generate(): IEar {
    return {
      hearing: this.generateHearing(),
    }
  }
}

export interface IEar {
  /** A description of the ear. */
  description?: string
  /** How well the ear can hear, from 0-100. */
  hearing?: number
}

export interface IEars {
  /** Properties pertaining to character's left ear. */
  left: IEar
  /** Properties pertaining to character's right ear. */
  right: IEar
}
