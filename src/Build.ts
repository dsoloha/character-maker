export default class Build implements IBuild {
  height: number
  muscles: string
  type: string
  weight: number

  constructor(options?: IBuild) {
    this.height = options?.height ?? 0
    this.muscles = options?.muscles ?? ''
    this.type = options?.type ?? ''
    this.weight = options?.weight ?? 0
  }
}

export interface IBuild {
  /** How tall the character is, in cm. */
  height?: number
  /** How muscular the character is. */
  muscles?: string
  /** The character's build type (lithe, stocky, etc). */
  type?: string
  /** How much the character weighs, in kg. */
  weight?: number
}
