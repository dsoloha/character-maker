import { random } from '../lib/number'

export default class Background implements IBackground {
  birthplace: ILocation
  education: IEducation | null
  nationality: string
  occupation: IOccupation

  constructor(options?: IBackground) {
    this.birthplace = options?.birthplace ?? { city: '', country: '' }
    this.education = options?.education ?? null
    this.nationality = options?.nationality ?? ''
    this.occupation = options?.occupation ?? {
      type: options?.occupation?.type ?? '',
      income: options?.occupation?.income ?? 0,
      length: options?.occupation?.length ?? 0,
    }
  }

  /** Generates the location in which the character was born. */
  generateBirthplace({ city, country } = { city: '', country: '' }): ILocation {
    city = city || ''
    country = country || ''

    return { city, country }
  }

  /** Generates the type and amount of education the character received. */
  generateEducation(): IEducation | null {
    const seed = random(1, 100)

    if (seed < 25) return null

    return {
      school: '',
      length: 0,
    }
  }

  /** Generates the nationality of the character. */
  generateNationality(): string {
    const nationalities: string[] = []

    return nationalities.random()
  }

  /** Generates the character's occupation. */
  generateOccupation(
    { type, income, length } = { type: '', income: 0, length: 0 }
  ): IOccupation {
    // TODO: hook this up to a list of potential occupations
    const types: string[] = []
    income = income || random(1, 100)
    length = length || random(1, 100)

    return {
      type: type || types.random(),
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
  birthplace?: ILocation
  /** Properties pertaining to the character's education. */
  education?: IEducation | null
  /** The character's nationality. */
  nationality?: string
  /** Properties pertaining to the character's occupation. */
  occupation?: IOccupation
}

export interface IEducation {
  /** The character's grade-point average at graduation, out of 100. */
  grade?: number
  /** How many months the character attended the school. */
  length?: number
  /** The school the character went to. */
  school?: string
}

export interface ILocation {
  /** The name of the city. */
  city?: string
  /** The name of the country. */
  country?: string
}

export interface IOccupation {
  /** The character's weekly income in the local currency. */
  income: number
  /** How many months the character has had this occupation. */
  length: number
  /** The character's current occupation. */
  type: string
}
