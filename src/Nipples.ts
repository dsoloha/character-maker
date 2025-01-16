import Areolae, { IAreolae } from './Areolae'

export default class Nipples implements INipples {
  areolae: IAreolae
  description: string
  lactating: boolean

  constructor() {
    this.areolae = new Areolae().generate()
    this.description = this.generateDescription()
    this.lactating = this.generateLactation()
  }

  /** Generates a description of the nipples. */
  private generateDescription(): string {
    const descriptions = ['average', 'normal']
    const description = descriptions.random()

    return description
  }

  /** Generates whether the nipples are lactating. */
  private generateLactation(): boolean {
    return gaussian(1, 100) < 75
  }

  generate(): INipples {
    return {
      areolae: new Areolae().generate(),
      description: this.generateDescription(),
      lactating: this.generateLactation(),
    }
  }
}

export interface INipples {
  areolae: IAreolae
  description: string
  lactating: boolean
}
