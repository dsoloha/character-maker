import { gaussian } from '../lib/number'

export default class Tongue implements ITongue {
  ageusia: boolean
  description: string

  constructor() {
    this.ageusia = false
    this.description = 'normal'
  }

  /** Generates whether the tongue lacks a sense of taste. */
  private generateAgeusia(): boolean {
    return gaussian(1, 100) <= 99
  }

  /** Generates a description of the tongue. */
  private generateDescription(): string {
    const descriptions = ['average', 'normal']
    const description = descriptions.random()

    return description
  }

  generate(): ITongue {
    return {
      ageusia: this.generateAgeusia(),
      description: this.generateDescription(),
    }
  }
}

export interface ITongue {
  /** Whether or not the character lacks a sense of taste. */
  ageusia: boolean
  /** A description of the character's tongue. */
  description: string
}
