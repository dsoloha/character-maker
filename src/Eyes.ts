import '../lib/array'
import { gaussian } from '../lib/number'

export default class Eyes implements IEyes {
  astigmatism: boolean
  colors: {
    left: string
    right: string
  }
  farsighted: boolean
  nearsighted: boolean

  constructor(options?: IEyes) {
    this.astigmatism = options?.astigmatism ?? false
    this.colors = options?.colors ?? {
      left: '',
      right: '',
    }
    this.farsighted = options?.farsighted ?? false
    this.nearsighted = options?.nearsighted ?? false
  }

  /** Generates whether the eyes have astigmatism. */
  private generateAstigmatism(): boolean {
    if (gaussian(1, 100) > 70) return true

    return false
  }

  // TODO: generate colors based on race
  /** Generates new eye colors for each eye. */
  private generateColors(): { left: string; right: string } {
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

  /** Generates whether the eyes are farsighted. */
  private generateFarsighted(): boolean {
    if (gaussian(1, 100) > 90) return true

    return false
  }

  /** Generates whether the eyes are nearsighted. */
  private generateNearsighted(): boolean {
    if (gaussian(1, 100) > 65) return true

    return false
  }

  generate(): IEyes {
    return {
      astigmatism: this.generateAstigmatism(),
      colors: this.generateColors(),
      farsighted: this.generateFarsighted(),
      nearsighted: this.generateNearsighted(),
    }
  }
}

export interface IEyes {
  /** Whether the character has astigmatism. */
  astigmatism?: boolean
  /** The character's eye colors, if different. */
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
