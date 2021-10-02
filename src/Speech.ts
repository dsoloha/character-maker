export default class Speech {
  style: string

  constructor(options?: { style?: string }) {
    this.style = options?.style ?? ''
  }
}
