import { gaussian } from '../lib/number'

export default class Neck implements INeck {
  description: string
  larynx: boolean

  constructor(options?: INeck) {
    this.description = options?.description ?? this.generateDescription()
    this.larynx = options?.larynx ?? this.generateLarynx()
  }

  /** Generates a description of the neck. */
  private generateDescription(): string {
    const descriptions = ['average', 'normal']
    const description = descriptions.random()

    return description
  }

  /** Generates whether the character has vocal cords. */
  private generateLarynx(): boolean {
    return gaussian(1, 100) <= 99
  }

  generate(): INeck {
    return {
      description: this.generateDescription(),
      larynx: this.generateLarynx(),
    }
  }
}

export interface INeck {
  /** A description of the character's neck. */
  description?: string
  /** Whether the character has vocal cords. */
  larynx?: boolean
}
