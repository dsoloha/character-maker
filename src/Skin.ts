export default class Skin implements ISkin {
  color: string
  birthmarks: IMark[] | null
  brands: IMark[] | null
  markings: IMark[] | null
  scars: IMark[] | null
  tattoos: IMark[] | null

  constructor(options?: {
    color?: string
    birthmarks?: IMark[] | null
    brands?: IMark[] | null
    markings?: IMark[] | null
    scars?: IMark[] | null
    tattoos?: IMark[] | null
  }) {
    this.color = options?.color ?? ''
    this.birthmarks = options?.birthmarks ?? null
    this.brands = options?.brands ?? null
    this.markings = options?.markings ?? null
    this.scars = options?.scars ?? null
    this.tattoos = options?.tattoos ?? null
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
  /** Any scars the character has. */
  scars?: IMark[] | null
  /** Any tattoos the character has. */
  tattoos?: IMark[] | null
}
