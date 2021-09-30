export default class Background {
  /** The character's birthplace. */
  birthplace: string
  /** The character's nationality. */
  nationality: string

  constructor(options?: { birthplace?: string; nationality?: string }) {
    this.birthplace = options?.birthplace ?? ''
    this.nationality = options?.nationality ?? ''
  }
}
