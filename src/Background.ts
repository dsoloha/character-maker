import { random } from '../lib/number'

export default class Background implements IBackground {
  birthplace: string
  education: {
    school: string
    length: number
  } | null
  nationality: string
  occupation: {
    type: string
    income: number
    length: number
  }

  constructor(options?: IBackground) {
    this.birthplace = options?.birthplace ?? ''
    this.education = options?.education ?? null
    this.nationality = options?.nationality ?? ''
    this.occupation = options?.occupation ?? {
      type: options?.occupation?.type ?? '',
      income: options?.occupation?.income ?? 0,
      length: options?.occupation?.length ?? 0,
    }
  }

  generateBirthplace(): string {
    // TODO: hook this up to a list of potential birthplaces
    const places: string[] = []

    return places.random()
  }

  generateEducation(): IEducation | null {
    const seed = random(1, 100)

    if (seed < 25) return null

    return {
      school: '',
      length: 0,
    }
  }

  generateNationality(): string {
    const nationalities: string[] = []

    return nationalities.random()
  }

  generateOccupation(): IOccupation {
    // TODO: hook this up to a list of potential occupations
    const types: string[] = []
    const income = random(1, 100)
    const length = random(1, 100)

    return {
      type: types.random(),
      income,
      length,
    }
  }

  generate(): IBackground {
    return {
      birthplace: this.generateBirthplace(),
      education: this.generateEducation(),
      nationality: this.generateNationality(),
      occupation: this.generateOccupation(),
    }
  }
}

export interface IBackground {
  /** The character's birthplace. */
  birthplace?: string
  /** Properties pertaining to the character's education. */
  education?: IEducation | null
  /** The character's nationality. */
  nationality?: string
  /** Properties pertaining to the character's occupation. */
  occupation?: IOccupation
}

export interface IEducation {
  /** The school the character went to. */
  school: string
  /** How many years the character attended the school. */
  length: number
}

export interface IOccupation {
  /** The character's current occupation. */
  type: string
  /** The character's annual income in USD. */
  income: number
  /** How many years the character has had this occupation. */
  length: number
}
