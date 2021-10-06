export default class Speech {
  /** The character's style of speaking. */
  style: string

  constructor(options?: { style?: string }) {
    this.style = options?.style ?? ''
  }
}
