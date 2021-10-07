export default class Shoulders implements IShoulders {
  width: string

  constructor(options?: { width?: string }) {
    this.width = options?.width ?? ''
  }
}

export interface IShoulders {
  /** The width of the character's shoulders. */
  width: string
}
