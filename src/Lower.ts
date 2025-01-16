import Waist, { IWaist } from './Waist'
import Legs, { ILegs } from './Legs'

export default class Lower implements ILower {
  waist: IWaist
  leg: ILegs

  constructor() {
    this.waist = new Waist().generate()
    this.leg = new Legs().generate()
  }
}

export interface ILower {
  waist: IWaist
  leg: ILegs
}
