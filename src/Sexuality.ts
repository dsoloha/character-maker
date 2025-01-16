import { gaussian, random } from '../lib/number'
import { SexType } from './Sex'

// TODO: expand this with full modern gender spectrum

export default class Sexuality implements ISexuality {
  gender: string
  attraction: {
    androphilic: number
    gynophylic: number
  }

  constructor(sex: SexType, options?: ISexuality) {
    this.gender = options?.gender ?? sex
    this.attraction = options?.attraction ?? {
      androphilic: options?.attraction?.androphilic ?? 0,
      gynophylic: options?.attraction?.gynophylic ?? 0,
    }
  }

  /** Generates the character's gender. */
  generateGender(options: { sex: SexType } = { sex: 'male' }): string {
    if (gaussian(1, 100, 1.5) > 99) {
      if (options.sex === 'male') return 'female'
      if (options.sex === 'female') return 'male'
    }

    return options.sex
  }

  /** Generates how attracted the character is to other sexes. */
  generateAttraction(options: { sex: SexType } = { sex: 'male' }): IAttraction {
    if (gaussian(1, 100) > 95) {
      if (options.sex === 'male') {
        return {
          androphilic: random(65, 100),
          gynophylic: random(0, 35),
        }
      }
      if (options.sex === 'female') {
        return {
          androphilic: random(0, 35),
          gynophylic: random(65, 100),
        }
      }
    } else {
      if (options.sex === 'male') {
        return {
          androphilic: random(0, 35),
          gynophylic: random(65, 100),
        }
      }
      if (options.sex === 'female') {
        return {
          androphilic: random(65, 100),
          gynophylic: random(0, 35),
        }
      }
    }

    return {
      androphilic: 0,
      gynophylic: 0,
    }
  }

  generate(): ISexuality {
    return {
      gender: this.generateGender(),
      attraction: this.generateAttraction(),
    }
  }
}

interface IAttraction {
  /** How attracted the character is to masculinity.
   * On a scale of 0 - 100, with 0 being completely disinterested and 100 being extremely attracted.
   */
  androphilic: number
  /** How attracted the character is to femininity.
   * On a scale of 0 - 100, with 0 being completely disinterested and 100 being extremely attracted.
   */
  gynophylic: number
}

export interface ISexuality {
  /** The character's self-perceived gender. */
  gender?: string
  /** Properties pertaining to the character's attraction to different sexes. */
  attraction?: IAttraction
}
