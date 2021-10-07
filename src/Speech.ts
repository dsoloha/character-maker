export default class Speech implements ISpeech {
  style: string

  constructor(options?: ISpeech) {
    this.style = options?.style ?? ''
  }
}

export interface ISpeech {
  /** The character's style of speaking. */
  style?: string
}
