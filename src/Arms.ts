export default class Arms {
  left: IArm
  right: IArm

  constructor(options?: IArms) {
    this.left = options?.left ?? {
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      size: options?.right?.size ?? '',
    }
  }
}

export interface IArm {
  /** Properties pertaining to the arm's size. */
  size: string
}

export interface IArms {
  /** Properties pertaining to the character's left arm. */
  left: IArm
  /** Properties pertaining to the character's right arm. */
  right: IArm
}
