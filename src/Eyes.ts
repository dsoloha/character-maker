import '../lib/array'
import { gaussian } from '../lib/number'

export default class Eyes implements IEyes {
  astigmatism: boolean
  color: string
  colors: {
    left: string
    right: string
  }
  farsighted: boolean
  nearsighted: boolean

  constructor(options?: IEyes) {
    this.astigmatism = options?.astigmatism ?? false
    this.color = options?.color ?? ''
    this.colors = options?.colors ?? {
      left: this.color,
      right: this.color,
    }
    this.farsighted = options?.farsighted ?? false
    this.nearsighted = options?.nearsighted ?? false
  }

  generateAstigmatism(): boolean {
    if (gaussian(1, 100) > 70) return true

    return false
  }

  // TODO: add options for race
  generateColor(): string {
    const colors = ['green', 'blue', 'brown']

    return colors.random()
  }

  generateColors(): { left: string; right: string } {
    const colors = ['green', 'blue', 'brown']
    let eyes: [string, string]

    if (gaussian(1, 100, 1.5) > 99) {
      const left = colors.random()
      let right: string = colors.random()

      while (right === left) right = colors.random()

      eyes = [left, right]
    } else {
      const color = colors.random()

      eyes = [color, color]
    }

    return {
      left: eyes[0],
      right: eyes[1],
    }
  }

  generateFarsighted(): boolean {
    if (gaussian(1, 100) > 90) return true

    return false
  }

  generateNearsighted(): boolean {
    if (gaussian(1, 100) > 65) return true

    return false
  }

  generate(): IEyes {
    return {
      astigmatism: this.generateAstigmatism(),
      color: this.generateColor(),
      colors: this.generateColors(),
      farsighted: this.generateFarsighted(),
      nearsighted: this.generateNearsighted(),
    }
  }
}

export interface IEyes {
  /** Whether the character has astigmatism. */
  astigmatism?: boolean
  /** The character's eye color. */
  color?: string
  /** The character's eye colors if different. */
  colors?: {
    /** The character's left eye color. */
    left: string
    /** The character's right eye color. */
    right: string
  }
  /** Whether the character is farsighted. */
  farsighted?: boolean
  /** Whether the character is nearsighted. */
  nearsighted?: boolean
}
