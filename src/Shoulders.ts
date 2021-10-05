export default class Shoulders {
  /** The width of the character's shoulders. */
  width: string

  constructor(options?: { width?: string }) {
    this.width = options?.width ?? ''
  }
}
