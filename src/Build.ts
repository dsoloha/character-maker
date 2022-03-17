import '../lib/array'
import { gaussian } from '../lib/number'
import { SexType } from './Sex'

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

  // TODO: generate height based on nationality
  /** Generates a new height, in cm. */
  private generateHeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian(147, 207)
    if (options?.sex === 'female') return gaussian(134, 194)

    return gaussian(140, 200)
  }

  // TODO: base muscles on sex and build type
  /** Generates new muscles. */
  private generateMuscles(options: { sex: SexType } = { sex: 'male' }): string {
    const muscles = ['weak', 'average', 'strong', 'jacked']

    if (options?.sex === 'male') return muscles.random()
    if (options?.sex === 'female') return muscles.random()

    return muscles.random()
  }

  // TODO: add more types
  /** Generates a new build. */
  private generateType(options: { sex: SexType } = { sex: 'male' }): string {
    const types = ['lithe', 'average', 'stocky']

    if (options?.sex === 'male') return types.random()
    if (options?.sex === 'female') return types.random()

    return types.random()
  }

  /** Generates a new weight, in kg. */
  private generateWeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian()
    if (options?.sex === 'female') return gaussian()

    return gaussian()
  }

  generate(options: { sex: SexType } = { sex: 'male' }): IBuild {
    return {
      height: this.generateHeight({ sex: options?.sex }),
      muscles: this.generateMuscles({ sex: options?.sex }),
      type: this.generateType({ sex: options?.sex }),
      weight: this.generateWeight({ sex: options?.sex }),
    }
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
