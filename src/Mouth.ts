import '../lib/array'
import Lips, { ILips } from './Lips'
import Teeth, { ITeeth } from './Teeth'
import Tongue, { ITongue } from './Tongue'

export default class Mouth implements IMouth {
  lips: ILips
  teeth: ITeeth
  tongue: ITongue

  constructor(options?: IMouth) {
    this.lips = options?.lips ?? new Lips()
    this.teeth = options?.teeth ?? new Teeth()
    this.tongue = options?.tongue ?? new Tongue()
  }

  generate(): IMouth {
    return {
      lips: new Lips(),
      teeth: new Teeth().generate(),
      tongue: new Tongue().generate(),
    }
  }
}

export interface IMouth {
  /** Properties pertaining to the character's lips. */
  lips?: ILips
  /** Properties pertaining to the character's teeth. */
  teeth?: ITeeth
  /** Properties pertaining to the character's tongue. */
  tongue?: ITongue
}
