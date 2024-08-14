import { random } from '../lib/number'

export default class Background implements IBackground {
  birthplace: ILocation
  education: IEducation
  occupation: IOccupation

  constructor(options?: IBackground) {
    this.birthplace = options?.birthplace ?? this.generateBirthplace()
    this.education = options?.education ?? this.generateEducation()
    this.occupation = options?.occupation ?? this.generateOccupation()
  }

  /** Generates the location in which the character was born. */
  private generateBirthplace(
    { city, country }: ILocation = { city: undefined, country: undefined }
  ): ILocation {
    city = city || '' // TODO: hook this up to helper library of cities
    country = country || '' // TODO: hook this up to helper library of countries

    return { city, country }
  }

  /** Generates the type and amount of education the character received. */
  private generateEducation(
    { highestLevel, schools }: IEducation = {
      highestLevel: '',
      schools: [],
    }
  ): IEducation {
    schools = schools || [
      { name: 'high school', grade: 0, length: 0 },
      { name: 'college', grade: 0, length: 0 },
      { name: 'university', grade: 0, length: 0 },
    ] // TODO: hook this up to helper library of schools
    highestLevel = highestLevel || 'ged'

    return {
      highestLevel,
      schools,
    }
  }

  /** Generates the character's occupation. */
  private generateOccupation(
    { type, income, length }: IOccupation = {
      type: '',
      income: 0,
      length: 0,
    }
  ): IOccupation {
    const types: string[] = ['architect', 'artist'] // TODO: hook this up to helper library of occupations
    type = type || types.random()
    income = income || random(1, 100)
    length = length || random(1, 100)

    return {
      type,
      income,
      length,
    }
  }

  generate(
    { birthplace, education, occupation }: IBackground = {
      birthplace: { city: '', country: '' },
      education: { highestLevel: '', schools: [] },
      occupation: { income: 0, length: 0, type: '' },
    }
  ): IBackground {
    birthplace = birthplace || this.generateBirthplace(birthplace)
    education = education || this.generateEducation(education)
    occupation = occupation || this.generateOccupation(occupation)

    return {
      birthplace,
      education,
      occupation,
    }
  }

  /** Returns the nationality of the character. */
  get nationality(): string {
    return this.birthplace.country ?? ''
  }
}

export interface IBackground {
  /** Properties pertaining to where the character was born. */
  birthplace?: ILocation
  /** Properties pertaining to the character's education, if any. */
  education?: IEducation
  /** Properties pertaining to the character's occupation. */
  occupation?: IOccupation
}

export interface IEducation {
  /** The school the character went to. */
  schools: ISchool[]
  highestLevel: string
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
  /** How many years the character has had this occupation. */
  length: number
  /** The character's current occupation. */
  type: string
}

export interface ISchool {
  /** The name of the school. */
  name: string
  /** The character's grade-point average at graduation, out of 100. */
  grade: number
  /** How many years the character attended the school. */
  length: number
}
