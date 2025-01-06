import '../lib/array'

export default class Areolae implements IAreolae {
  description: string

  constructor() {
    this.description = this.generateDescription()
  }

  /** Generates a description of the areola. */
  private generateDescription(): string {
    const descriptions = ['average', 'normal']
    const description = descriptions.random()

    return description
  }

  generate(): IAreolae {
    return {
      description: this.generateDescription(),
    }
  }
}

export interface IAreolae {
  /** A description of the areola. */
  description: string
}
