export default class Legs {
  /** Properties pertaining to the character's left leg. */
  left: ILeg
  /** Properties pertaining to the character's right leg. */
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

interface ILeg {
  /** Properties pertaining to the leg's size. */
  size: string
}
