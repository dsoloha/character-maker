export default class Stomach {
  shape: string

  constructor(options?: { shape?: string }) {
    this.shape = options?.shape ?? ''
  }
}
