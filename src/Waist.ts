import '../lib/array'
import Crotch, { ICrotch } from './Crotch'
import Hips, { IHips } from './Hips'
import { SexType } from './Sex'

export default class Waist implements IWaist {
  crotch: ICrotch
  hips: IHips

  constructor(sex: SexType, options?: IWaist) {
    this.crotch = new Crotch().generate(sex)
    this.hips = new Hips().generate()
  }

  generate(): IWaist {
    return {
      crotch: new Crotch().generate(sex),
    }
  }
}

export interface IWaist {
  /** Properties pertaining to the character's crotch. */
  crotch?: ICrotch
  /** Properties pertaining to the character's hips. */
  hips?: IHips
}
