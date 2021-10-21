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
  generateHeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian(147, 207)
    else if (options?.sex === 'female') return gaussian(134, 194)

    return gaussian(140, 200)
  }

  // TODO: base muscles on sex and build type
  generateMuscles(options: { sex: SexType } = { sex: 'male' }): string {
    const muscles = ['weak', 'average', 'strong', 'jacked']

    if (options?.sex === 'male') return muscles.random()
    else if (options?.sex === 'female') return muscles.random()

    return muscles.random()
  }

  // TODO: add more types
  generateType(options: { sex: SexType } = { sex: 'male' }): string {
    const types = ['lithe', 'average', 'stocky']

    if (options?.sex === 'male') return types.random()
    else if (options?.sex === 'female') return types.random()

    return types.random()
  }

  generateWeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian()
    else if (options?.sex === 'female') return gaussian()

    return gaussian()
  }

  generate(): IBuild {
    return {
      height: this.generateHeight(),
      muscles: this.generateMuscles(),
      type: this.generateType(),
      weight: this.generateWeight(),
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
