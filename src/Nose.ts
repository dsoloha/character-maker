import { gaussian } from '../lib/number'

export default class Nose implements INose {
  anosmia: boolean

  constructor(options?: INose) {
    this.anosmia = options?.anosmia ?? false
  }

  generateAnosmia(): boolean {
    return gaussian(1, 100) > 99 ? false : true
  }

  generate(): INose {
    return {
      anosmia: this.generateAnosmia(),
    }
  }
}

export interface INose {
  /** Whether or not the character has a lack of a sense of smell. */
  anosmia?: boolean
}
