import { SexType } from './Sex'

export default class Sexuality {
  /** The character's self-perceived gender. */
  gender: string
  /** Properties pertaining to the character's attraction to different sexes. */
  attraction: {
    /** How attracted the character is to males. */
    male: number
    /** How attracted the character is to females. */
    female: number
  }

  constructor(
    sex: SexType,
    options?: {
      gender?: string
      attraction?: {
        male: number
        female: number
      }
    }
  ) {
    this.gender = options?.gender ?? sex
    this.attraction = options?.attraction ?? {
      male: options?.attraction?.male ?? 0,
      female: options?.attraction?.female ?? 0,
    }
  }
}
