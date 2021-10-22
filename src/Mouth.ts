import '../lib/array'
import { gaussian, random } from '../lib/number'

export default class Mouth implements IMouth {
  teeth: {
    count: number
    description: string
  }
  tongue: boolean

  constructor(options?: IMouth) {
    this.teeth = options?.teeth ?? {
      count: 32,
      description: '',
    }
    this.tongue = options?.tongue ?? true
  }

  generateTeeth(): ITeeth {
    const count = gaussian(1, 100) > 95 ? random(1, 32) : 32
    const descriptions = ['straight', 'yellow', 'white']
    const description = descriptions.random()

    return {
      count,
      description,
    }
  }

  generateTongue(): boolean {
    return gaussian(1, 100) > 99 ? false : true
  }

  generate(): IMouth {
    return {
      teeth: this.generateTeeth(),
      tongue: this.generateTongue(),
    }
  }
}

export interface ITeeth {
  /** How many teeth the character has, out of 32. */
  count: number
  /** A description of the character's teeth. */
  description: string
}

export interface IMouth {
  /** Properties pertaining to the character's teeth. */
  teeth?: ITeeth
  /** Whether or not the character has a tongue. */
  tongue?: boolean
}
