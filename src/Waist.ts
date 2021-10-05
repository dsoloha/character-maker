export default class Waist {
  /** The size of the character's waist. */
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}
