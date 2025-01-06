import '../lib/array'
import Teeth, { ITeeth } from './Teeth'
import Tongue, { ITongue } from './Tongue'

export default class Mouth implements IMouth {
  teeth: ITeeth
  tongue: ITongue

  constructor(options?: IMouth) {
    this.teeth = options?.teeth ?? new Teeth()
    this.tongue = options?.tongue ?? new Tongue()
  }

  generate(): IMouth {
    return {
      teeth: new Teeth().generate(),
      tongue: new Tongue().generate(),
    }
  }
}

export interface IMouth {
  /** Properties pertaining to the character's teeth. */
  teeth?: ITeeth
  /** Properties pertaining to the character's tongue. */
  tongue?: ITongue
}
