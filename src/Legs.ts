export default class Legs implements ILegs {
  left: ILeg
  right: ILeg

  constructor(options?: { left?: ILeg; right?: ILeg }) {
    this.left = options?.left ?? {
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      size: options?.right?.size ?? '',
    }
  }
}

export interface ILeg {
  /** Properties pertaining to the leg's size. */
  size: string
}

export interface ILegs {
  /** Properties pertaining to the character's left leg. */
  left?: ILeg
  /** Properties pertaining to the character's right leg. */
  right?: ILeg
}
