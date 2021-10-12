import Foot, { IFoot } from './Foot'

export default class Legs implements ILegs {
  left: ILeg
  right: ILeg

  constructor(options?: ILegs) {
    this.left = options?.left ?? {
      foot: options?.left?.foot ?? new Foot(options?.left?.foot),
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      foot: options?.right?.foot ?? new Foot(options?.right?.foot),
      size: options?.right?.size ?? '',
    }
  }
}

export interface ILeg {
  /** Properties pertaining to the foot on the leg. */
  foot: IFoot
  /** Properties pertaining to the leg's size. */
  size: string
}

export interface ILegs {
  /** Properties pertaining to the character's left leg. */
  left?: ILeg
  /** Properties pertaining to the character's right leg. */
  right?: ILeg
}
