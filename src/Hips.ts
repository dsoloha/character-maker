import '../lib/array'

export default class Hips implements IHips {
  size: string

  constructor() {
    this.size = this.generateSize()
  }

  /** Generates a size for the hips. */
  generateSize(): string {
    const sizes = ['narrow', 'average', 'wide']
    const size = sizes.random()

    return size
  }

  generate(): IHips {
    return {
      size: this.generateSize(),
    }
  }
}

export interface IHips {
  /** How wide the character's hips are. */
  size: string
}
