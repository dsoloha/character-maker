export default class Background {
  /** The character's birthplace. */
  birthplace: string
  /** Properties pertaining to the character's education. */
  education: {
    /** The school the character went to. */
    school: string
    /** How many years the character attended the school. */
    length: number
  } | null
  /** The character's nationality. */
  nationality: string
  /** Properties pertaining to the character's occupation. */
  occupation: {
    /** The character's current occupation. */
    type: string
    /** The character's annual income. */
    income: number
    /** How many years the character has had this occupation. */
    length: number
  }

  constructor(options?: {
    birthplace?: string
    education?: {
      school: string
      length: number
    } | null
    nationality?: string
    occupation?: {
      type: string
      income: number
      length: number
    }
  }) {
    this.birthplace = options?.birthplace ?? ''
    this.education = options?.education ?? null
    this.nationality = options?.nationality ?? ''
    this.occupation = options?.occupation ?? {
      type: options?.occupation?.type ?? '',
      income: options?.occupation?.income ?? 0,
      length: options?.occupation?.length ?? 0,
    }
  }
}
