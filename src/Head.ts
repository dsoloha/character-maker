import Eyes, { IEyes } from './Eyes'
import Mouth, { IMouth } from './Mouth'
import Nose, { INose } from './Nose'
import Neck, { INeck } from './Neck'
import Face, { IFace } from './Face'

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
  eyes: IEyes
  face: IFace
  mouth: IMouth
  nose: INose
  neck: INeck
}
