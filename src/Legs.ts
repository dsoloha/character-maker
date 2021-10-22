import { gaussian } from '../lib/number'
import Foot, { IFoot } from './Foot'

export default class Legs implements ILegs {
  left: ILeg
  right: ILeg

  constructor(options?: ILegs) {
    this.left = options?.left ?? {
      foot: options?.left?.foot ?? null,
      size: options?.left?.size ?? '',
    }
    this.right = options?.right ?? {
      foot: options?.right?.foot ?? null,
      size: options?.right?.size ?? '',
    }
  }

  generateFoot(): IFoot | null {
    return gaussian(1, 100) > 95 ? null : new Foot().generate()
  }

  generateLeg(): ILeg {
    return {
      foot: this.generateFoot(),
      size: '',
    }
  }

  generate(): ILegs {
    const left = this.generateLeg()
    const right = this.generateLeg()
    const sizes = ['small', 'average', 'large', 'huge']
    const size: string = sizes.random()

    left.size = size
    right.size = size

    return {
      left,
      right,
    }
  }
}

export interface ILeg {
  /** Properties pertaining to the foot on the leg. */
  foot?: IFoot | null
  /** Properties pertaining to the leg's size. */
  size?: string
}

export interface ILegs {
  /** Properties pertaining to the character's left leg. */
  left?: ILeg
  /** Properties pertaining to the character's right leg. */
  right?: ILeg
}
