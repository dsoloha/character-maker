import { gaussian } from '../lib/number'
import { random } from '../lib/array'
import Hand, { IHand } from './Hand'

export default class Arms {
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

  generateHand(): IHand | null {
    return gaussian(1, 100) > 95 ? null : new Hand()
  }

  generateArm(): IArm {
    return {
      hand: this.generateHand(),
      size: '',
    }
  }

  generate(): IArms {
    const left = this.generateArm()
    const right = this.generateArm()
    const size: string = random(['small', 'average', 'large', 'huge'])

    left.size = size
    right.size = size

    return {
      left,
      right,
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
