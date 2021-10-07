export default class Shoulders implements IShoulders {
  width: string

  constructor(options?: IShoulders) {
    this.width = options?.width ?? ''
  }
}

export interface IShoulders {
  /** The width of the character's shoulders. */
  width?: string
}
