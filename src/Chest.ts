import '../lib/array'
import { random } from '../lib/number'
import { SexType } from './Sex'

export default class Chest implements IChest {
  size: string

  constructor(options?: IChest) {
    this.size = options?.size ?? ''
  }

  /** Generates a new chest. */
  private generateChest(options: { sex: SexType } = { sex: 'male' }): string {
    const sizes = ['flat', 'small', 'medium', 'large', 'huge']

    if (options.sex === 'male') return sizes[random(0, 2)]

    return sizes.random()
  }

  generate(options: { sex: SexType } = { sex: 'male' }): IChest {
    return {
      size: this.generateChest(options),
    }
  }
}

export interface IChest {
  /** The size of the character's chest. */
  size?: string
}
