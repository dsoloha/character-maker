import { random } from '../lib/number'

export type SexType = 'male' | 'female'

export default class Sex implements ISex {
  type: SexType

  constructor(options?: ISex) {
    this.type = options?.type ?? 'male'
  }

  generateType(): SexType {
    return random(1, 100) > 50 ? 'male' : 'female'
  }

  generate(): ISex {
    return {
      type: this.generateType(),
    }
  }
}

export interface ISex {
  /** The biological sex of the character. */
  type: SexType
}
