import { gaussian } from '../lib/number'

export default class Neck implements INeck {
  larynx: boolean

  constructor(options?: INeck) {
    this.larynx = options?.larynx ?? true
  }

  generateLarynx(): boolean {
    return gaussian(1, 100) > 99 ? false : true
  }

  generate(): INeck {
    return {
      larynx: this.generateLarynx(),
    }
  }
}

export interface INeck {
  /** Whether or not the character has vocal cords. */
  larynx?: boolean
}
