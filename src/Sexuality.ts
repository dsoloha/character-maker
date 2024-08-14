import { gaussian, random } from '../lib/number'
import { SexType } from './Sex'

// TODO: expand this with full modern gender spectrum

export default class Sexuality implements ISexuality {
  gender: string
  attraction: {
    male: number
    female: number
  }

  constructor(sex: SexType, options?: ISexuality) {
    this.gender = options?.gender ?? sex
    this.attraction = options?.attraction ?? {
      male: options?.attraction?.male ?? 0,
      female: options?.attraction?.female ?? 0,
    }
  }

  generateGender(options: { sex: SexType } = { sex: 'male' }): string {
    if (gaussian(1, 100, 1.5) > 99) {
      if (options.sex === 'male') return 'female'
      if (options.sex === 'female') return 'male'
    }

    return options.sex
  }

  generateAttraction(options: { sex: SexType } = { sex: 'male' }): IAttraction {
    if (gaussian(1, 100) > 95) {
      if (options.sex === 'male') {
        return {
          male: random(65, 100),
          female: random(0, 35),
        }
      }
      if (options.sex === 'female') {
        return {
          male: random(0, 35),
          female: random(65, 100),
        }
      }
    } else {
      if (options.sex === 'male') {
        return {
          male: random(0, 35),
          female: random(65, 100),
        }
      }
      if (options.sex === 'female') {
        return {
          male: random(65, 100),
          female: random(0, 35),
        }
      }
    }

    return {
      male: 0,
      female: 0,
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
  /** How attracted the character is to males, on a scale of 0 - 100. */
  male: number
  /** How attracted the character is to females, on a scale of 0 - 100. */
  female: number
}

export interface ISexuality {
  /** The character's self-perceived gender. */
  gender?: string
  /** Properties pertaining to the character's attraction to different sexes. */
  attraction?: IAttraction
}
