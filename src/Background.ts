export default class Background {
  /** The character's birthplace. */
  birthplace: string
  /** The character's education. */
  education: {
    /** The school the character went to. */
    school?: string
    /** How many years the character attended the school. */
    length?: number
  }
  /** The character's nationality. */
  nationality: string
  /** The character's current occupation. */
  occupation: string

  constructor(options?: {
    birthplace?: string
    education?: {
      school?: string
      length?: number
    }
    nationality?: string
    occupation?: string
  }) {
    this.birthplace = options?.birthplace ?? ''
    this.education = options?.education ?? {
      school: options?.education?.school ?? '',
      length: options?.education?.length ?? 1,
    }
    this.nationality = options?.nationality ?? ''
    this.occupation = options?.occupation ?? ''
  }
}
