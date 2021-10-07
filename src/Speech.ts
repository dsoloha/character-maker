export default class Speech implements ISpeech {
  style: string

  constructor(options?: { style?: string }) {
    this.style = options?.style ?? ''
  }
}

export interface ISpeech {
  /** The character's style of speaking. */
  style?: string
}
