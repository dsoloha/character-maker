export default class Chest {
  /** The size of the character's chest. */
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}
