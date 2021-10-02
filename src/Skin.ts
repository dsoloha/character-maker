export default class Skin {
  /** The color of the character's skin. */
  color: string
  /** Any birthmarks the character has. */
  birthmarks: Array<{
    /** Where the birthmark is located. */
    location: string
    /** A description of the birthmark. */
    description: string
  }> | null
  /** Any brands the character has. */
  brands: Array<{
    /** Where the brand is located. */
    location: string
    /** A description of the brand. */
    description: string
  }> | null
  /** Any markings the character has. */
  markings: Array<{
    /** Where the marking is located. */
    location: string
    /** A description of the marking. */
    description: string
  }> | null
  /** Any scars the character has. */
  scars: Array<{
    /** Where the scar is located. */
    location: string
    /** A description of the scar. */
    description: string
  }> | null
  /** Any tattoos the character has. */
  tattoos: Array<{
    /** Where the tattoo is located. */
    location: string
    /** A description of the tattoo. */
    description: string
  }> | null

  constructor(options?: {
    color?: string
    birthmarks?: Array<{
      location: string
      description: string
    }>
    brands?: Array<{
      location: string
      description: string
    }>
    markings?: Array<{
      location: string
      description: string
    }> | null
    scars?: Array<{
      location: string
      description: string
    }> | null
    tattoos?: Array<{
      location: string
      description: string
    }>
  }) {
    this.color = options?.color ?? ''
    this.birthmarks = options?.birthmarks ?? null
    this.brands = options?.brands ?? null
    this.markings = options?.markings ?? null
    this.scars = options?.scars ?? null
    this.tattoos = options?.tattoos ?? null
  }
}
