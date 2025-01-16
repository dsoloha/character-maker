import { gaussian } from '../lib/number'

export default class Teeth implements ITeeth {
  count: number
  description: string

  constructor() {
    this.count = 32
    this.description = 'normal'
  }

  /** Generates the number of teeth. */
  private generateCount(): number {
    return gaussian(1, 100) > 95 ? gaussian(1, 32, 0.25) : 32
  }

  /** Generates a description of the teeth. */
  private generateDescription(): string {
    const descriptions = ['straight', 'yellow', 'white']
    const description = descriptions.random()

    return description
  }

  generate(): ITeeth {
    return {
      count: this.generateCount(),
      description: this.generateDescription(),
    }
  }
}

export interface ITeeth {
  /** How many teeth the character has, out of 32. */
  count?: number
  /** A description of the character's teeth. */
  description?: string
}
