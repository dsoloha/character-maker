export default class Background {
  /** The character's birthplace. */
  birthplace: string

  constructor(options?: { birthplace?: string }) {
    this.birthplace = options?.birthplace ?? ''
  }
}
