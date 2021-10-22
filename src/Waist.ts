import '../lib/array'

export default class Waist implements IWaist {
  size: string

  constructor(options?: IWaist) {
    this.size = options?.size ?? ''
  }

  generateSize(): string {
    const sizes = ['small', 'average', 'large']
    const size = sizes.random()

    return size
  }

  generate(): IWaist {
    return {
      size: this.generateSize(),
    }
  }
}

export interface IWaist {
  /** The size of the character's waist. */
  size?: string
}
