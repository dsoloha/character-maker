export default class Waist {
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}
