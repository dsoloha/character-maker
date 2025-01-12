import Eyes, { IEyes } from './Eyes'
import Mouth, { IMouth } from './Mouth'
import Nose, { INose } from './Nose'
import Neck, { INeck } from './Neck'
import Face, { IFace } from './Face'
import { IEars } from './Ears'

export default class Head {
  eyes: IEyes
  face: IFace
  mouth: IMouth
  nose: INose
  neck: INeck

  constructor() {
    this.eyes = new Eyes()
    this.face = new Face()
    this.mouth = new Mouth()
    this.nose = new Nose()
    this.neck = new Neck()
  }
}

export interface IHead {
  /** Properties pertaining to the character's ears. */
  ears: IEars
  /** Properties pertaining to the character's eyes. */
  eyes: IEyes
  /** Properties pertaining to the character's face. */
  face: IFace
  /** Properties pertaining to the character's mouth. */
  mouth: IMouth
  /** Properties pertaining to the character's nose. */
  nose: INose
  /** Properties pertaining to the character's neck. */
  neck: INeck
}
