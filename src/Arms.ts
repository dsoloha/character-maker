import Hand, { IHand } from './Hand'

export default class Arms {
  left: IArm
  right: IArm

  constructor(options?: IArms) {
    this.left = options?.left ?? {
      hand: options?.left?.hand ?? new Hand(options?.left?.hand),
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      hand: options?.right?.hand ?? new Hand(options?.right?.hand),
      size: options?.right?.size ?? '',
    }
  }
}

export interface IArm {
  /** Properties pertaining to the hand on the arm. */
  hand?: IHand
  /** Properties pertaining to the arm's size. */
  size?: string
}

export interface IArms {
  /** Properties pertaining to the character's left arm. */
  left?: IArm
  /** Properties pertaining to the character's right arm. */
  right?: IArm
}
