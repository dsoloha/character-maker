import { gaussian } from '../lib/number'
import { SexType } from './Sex'

export default class Build implements IBuild {
  height: number
  muscles: number
  type: string
  weight: number

  constructor(options?: IBuild) {
    this.height = options?.height ?? 0
    this.muscles = options?.muscles ?? 0
    this.type = options?.type ?? ''
    this.weight = options?.weight ?? 0
  }

  /** Generates a new height, in cm. */
  private generateHeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian(147, 207)
    if (options?.sex === 'female') return gaussian(134, 194)

    return gaussian(140, 200)
  }

  /** Generates new muscles. */
  private generateMuscles(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian(1, 100, 0.75)
    if (options?.sex === 'female') return gaussian(1, 100, 1.25)

    return gaussian(1, 100)
  }

  /** Generates a description for the character's build based on height, weight, and musculature. */
  private generateType(options: {
    sex: SexType
    height: number
    weight: number
    muscles: number
  }): string {
    const meanHeight = {
      male: 168,
      female: 158,
    }
    const meanWeight = {
      male: 77,
      female: 73,
    }
    const lowMuscles = 35
    const midMuscles = 65
    const builds: [string, string, string][][] = [
      [
        ['frail', 'petite', 'shortstack'],
        ['small', 'short', 'beefy'],
        ['tubby', 'stout', 'rotund'],
      ],
      [
        ['skinny', 'trim', 'lean'],
        ['weak', 'average', 'buff'],
        ['soft', 'chubby', 'robust'],
      ],
      [
        ['gaunt', 'thin', 'burly'],
        ['lanky', 'tall', 'jacked'],
        ['pillowy', 'large', 'huge'],
      ],
    ]
    let height = 1
    let weight = 1
    let muscles = 1

    if (options.height < meanHeight[options.sex]) height = 0
    else if (options.height > meanHeight[options.sex]) height = 2

    if (options.weight < meanWeight[options.sex]) weight = 0
    else if (options.weight > meanWeight[options.sex]) weight = 2

    if (options.weight < lowMuscles) muscles = 0
    else if (options.weight < midMuscles) muscles = 2

    return builds[height][weight][muscles]
  }

  /** Generates a new weight, in kg. */
  private generateWeight(options: { sex: SexType } = { sex: 'male' }): number {
    if (options?.sex === 'male') return gaussian(47, 107, 0.75)
    if (options?.sex === 'female') return gaussian(43, 103, 1.25)

    return gaussian()
  }

  generate(options: { sex: SexType } = { sex: 'male' }): IBuild {
    const height = this.generateHeight({ sex: options?.sex })
    const muscles = this.generateMuscles({ sex: options?.sex })
    const weight = this.generateWeight({ sex: options?.sex })
    const type = this.generateType({
      sex: options?.sex ?? 'male',
      height,
      weight,
      muscles,
    })

    return { height, muscles, type, weight }
  }
}

export interface IBuild {
  /** How tall the character is, in cm.
   *  Global average height is roughly 170cm.
   */
  height?: number
  /** How muscular the character is, on a scale from 1 to 100 (1 being no visible muscle mass, 100 being bodybuilder-like musculature). */
  muscles?: number
  /** The character's build type (lithe, stocky, etc). */
  type?: string
  /** How much the character weighs, in kg.
   *  Healthy weight for average height is roughly 60kg.
   */
  weight?: number
}
