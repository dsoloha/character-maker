import '../lib/array'
import { gaussian } from '../lib/number'

export default class Eyes implements IEyes {
  left: IEye
  right: IEye

  constructor() {
    this.left = this.generate()
    this.right = this.generate()

    if (this.left.color !== this.right.color) {
      if (gaussian(1, 100) < 95) {
        this.left.color = this.right.color
      }
    }
  }

  /** Generates whether the eyes have astigmatism. */
  private generateAstigmatism(): boolean {
    return gaussian(1, 100) > 70
  }

  // TODO: generate colors based on race
  /** Generates new eye colors for each eye. */
  private generateColor(): string {
    const colors = ['green', 'blue', 'brown']

    return colors.random()
  }

  /** Generates whether the eye is farsighted. */
  private generateFarsighted(): boolean {
    return gaussian(1, 100) > 90
  }

  /** Generates whether the eye is nearsighted. */
  private generateNearsighted(): boolean {
    return gaussian(1, 100, 1.5) > 65
  }

  generate(): IEye {
    return {
      astigmatism: this.generateAstigmatism(),
      color: this.generateColor(),
      farsighted: this.generateFarsighted(),
      nearsighted: this.generateNearsighted(),
    }
  }
}

export interface IEyes {
  /** Properties pertaining to character's left eye. */
  left: IEye
  /** Properties pertaining to character's right eye. */
  right: IEye
}

export interface IEye {
  /** The degree to which the eye has astigmatism. */
  astigmatism?: boolean
  /** The color of the eye. */
  color?: string
  /** How farsighted the eye is. */
  farsighted?: boolean
  /** How nearsighted the eye is. */
  nearsighted?: boolean
}
