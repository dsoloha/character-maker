import { random } from '../lib/number'

export type SexType = 'male' | 'female' | 'plural' | 'neuter'

export default class Sex implements ISex {
  type: SexType

  constructor(options?: ISex) {
    this.type = options?.type ?? 'male'
  }

  generate(): string {
    return random(1, 100) > 50 ? 'male' : 'female'
  }
}

export interface ISex {
  /** The biological sex of the character. */
  type: SexType
}
