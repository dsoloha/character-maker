import '../lib/array'

export default class Chest implements IChest {
  size: string

  constructor(options?: IChest) {
    this.size = options?.size ?? ''
  }

  generateChest(): string {
    const sizes = ['flat', 'small', 'medium', 'large', 'huge']

    return sizes.random()
  }

  generate(): IChest {
    return {
      size: this.generateChest(),
    }
  }
}

export interface IChest {
  /** The size of the character's chest. */
  size?: string
}
