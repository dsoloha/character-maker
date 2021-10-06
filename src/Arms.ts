export default class Arms {
  /** Properties pertaining to the character's left arm. */
  left: IArm
  /** Properties pertaining to the character's right arm. */
  right: IArm

  constructor(options?: { left?: IArm; right?: IArm }) {
    this.left = options?.left ?? {
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      size: options?.right?.size ?? '',
    }
  }
}

interface IArm {
  /** Properties pertaining to the arm's size. */
  size: string
}
