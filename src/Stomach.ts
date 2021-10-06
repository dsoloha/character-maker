export default class Stomach {
  /** The shape of the character's stomach. */
  shape: string

  constructor(options?: { shape?: string }) {
    this.shape = options?.shape ?? ''
  }
}
