export default class Chest {
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}
