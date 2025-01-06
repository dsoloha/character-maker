import { gaussian } from '../lib/number'

export default class Nose implements INose {
  anosmia: boolean
  description: string

  constructor(options?: INose) {
    this.anosmia = options?.anosmia ?? false
    this.description = 'average'
  }

  /** Generates whether the nose can smell. */
  private generateAnosmia(): boolean {
    return gaussian(1, 100) <= 99
  }

  /** Generates a description of the nose. */
  private generateDescription(): string {
    const descriptions = ['average']

    return descriptions.random()
  }

  generate(): INose {
    return {
      anosmia: this.generateAnosmia(),
      description: this.generateDescription(),
    }
  }
}

export interface INose {
  /** Whether or not the character has a lack of a sense of smell. */
  anosmia?: boolean
  /** A description of the character's nose. */
  description: string
}
