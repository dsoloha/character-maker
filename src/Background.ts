export default class Background {
  /** The character's birthplace. */
  birthplace: string
  /** The character's nationality. */
  nationality: string
  /** The character's education. */
  education: {
    /** The school the character went to. */
    school?: string
    /** How many years the character attended the school. */
    length?: number
  }

  constructor(options?: {
    birthplace?: string
    nationality?: string
    education?: {
      school?: string
      length?: number
    }
  }) {
    this.birthplace = options?.birthplace ?? ''
    this.nationality = options?.nationality ?? ''
    this.education = options?.education ?? {
      school: options?.education?.school ?? '',
      length: options?.education?.length ?? 1,
    }
  }
}
