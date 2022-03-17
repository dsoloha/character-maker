import { gaussian } from '../lib/number'
import Hand, { IHand } from './Hand'

export default class Arms implements IArms {
  left: IArm
  right: IArm

  constructor(options?: IArms) {
    this.left = options?.left ?? {
      hand: options?.left?.hand ?? null,
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      hand: options?.right?.hand ?? null,
      size: options?.right?.size ?? '',
    }
  }

  /**
   * Generates a new hand.
   *
   * Returns `null` if a missing hand is generated.
   */
  private generateHand(): IHand | null {
    return gaussian(1, 100) > 97 ? null : new Hand().generate()
  }

  /** Generates a new arm. */
  private generateArm(muscles: number): IArm {
    const sizes = new Map([
      [0, 'small'],
      [25, 'average'],
      [50, 'large'],
      [75, 'huge'],
    ])
    let size = 'small'

    sizes.forEach((s, i) => {
      if (muscles > i) size = s
    })

    return {
      hand: this.generateHand(),
      size,
    }
  }

  generate(muscles: number): IArms {
    return {
      left: this.generateArm(muscles),
      right: this.generateArm(muscles),
    }
  }
}

export interface IArm {
  /** Properties pertaining to the hand on the arm. */
  hand?: IHand | null
  /** Properties pertaining to the arm's size. */
  size?: string
}

export interface IArms {
  /** Properties pertaining to the character's left arm. */
  left?: IArm
  /** Properties pertaining to the character's right arm. */
  right?: IArm
}
