import '../lib/array'

export default class Shoulders implements IShoulders {
  width: string

  constructor(options?: IShoulders) {
    this.width = options?.width ?? ''
  }

  generateWidth(): string {
    const sizes = ['narrow', 'average', 'broad']
    const size = sizes.random()

    return size
  }

  // TODO: add options for sex
  generate(): IShoulders {
    return {
      width: this.generateWidth(),
    }
  }
}

export interface IShoulders {
  /** The width of the character's shoulders. */
  width?: string
}
