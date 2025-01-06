export default class Tongue implements ITongue {
  ageusia: boolean
  description: string

  constructor() {
    this.ageusia = false
    this.description = 'normal'
  }
}

export interface ITongue {
  /** Whether or not the character lacks a sense of taste. */
  ageusia: boolean
  /** A description of the character's tongue. */
  description: string
}
