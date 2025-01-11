import '../lib/array'
import { gaussian } from '../lib/number'

export default class Skin implements ISkin {
  color: string
  birthmarks: IMark[] | null
  brands: IMark[] | null
  markings: IMark[] | null
  piercings: IMark[] | null
  scars: IMark[] | null
  tattoos: IMark[] | null

  constructor(options?: ISkin) {
    this.color = options?.color ?? ''
    this.birthmarks = options?.birthmarks ?? null
    this.brands = options?.brands ?? null
    this.markings = options?.markings ?? null
    this.piercings = options?.piercings ?? null
    this.scars = options?.scars ?? null
    this.tattoos = options?.tattoos ?? null
  }

  generateColor(): string {
    const colors = ['white', 'brown', 'black']
    const color = colors.random()

    return color
  }

  generateMark(options?: { location?: string; description?: string }): IMark {
    const locations = ['back', 'arm', 'leg', 'butt']
    const descriptions = ['a skull', 'a butterfly']
    const location = options?.location ?? locations.random()
    const description = options?.location ?? descriptions.random()

    return {
      location,
      description,
    }
  }

  generateBirthmarks(): IMark[] | null {
    const birthmarks = []

    while (gaussian(1, 100) > 80)
      birthmarks.push(this.generateMark({ description: 'a birthmark' }))

    if (birthmarks) return birthmarks

    return null
  }

  generateBrands(): IMark[] | null {
    const brands = []

    while (gaussian(1, 100) > 80)
      brands.push(this.generateMark({ description: 'a brand' }))

    if (brands) return brands

    return null
  }

  generateMarkings(): IMark[] | null {
    const markings = []

    while (gaussian(1, 100) > 80)
      markings.push(this.generateMark({ description: 'a marking' }))

    if (markings) return markings

    return null
  }

  generatePiercings(): IMark[] | null {
    const piercings = []

    while (gaussian(1, 100) > 80)
      piercings.push(this.generateMark({ description: 'a piercing' }))

    if (piercings) return piercings

    return null
  }

  generateScars(): IMark[] | null {
    const scars = []

    while (gaussian(1, 100) > 80)
      scars.push(this.generateMark({ description: 'a scar' }))

    if (scars) return scars

    return null
  }

  generateTattoos(): IMark[] | null {
    const tattoos = []

    while (gaussian(1, 100) > 80) tattoos.push(this.generateMark())

    if (tattoos) return tattoos

    return null
  }

  generate(): ISkin {
    return {
      color: this.generateColor(),
      birthmarks: this.generateBirthmarks(),
      brands: this.generateBrands(),
      markings: this.generateMarkings(),
      scars: this.generateScars(),
      tattoos: this.generateTattoos(),
    }
  }
}

export interface IMark {
  /** Where the mark is located. */
  location: string
  /** A description of the mark. */
  description: string
}

export interface ISkin {
  /** The color of the character's skin. */
  color?: string
  /** Any birthmarks the character has. */
  birthmarks?: IMark[] | null
  /** Any brands the character has. */
  brands?: IMark[] | null
  /** Any markings the character has. */
  markings?: IMark[] | null
  /** Any piercings the character has. */
  piercings?: IMark[] | null
  /** Any scars the character has. */
  scars?: IMark[] | null
  /** Any tattoos the character has. */
  tattoos?: IMark[] | null
}
