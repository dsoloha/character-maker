import { gaussian, random } from '../lib/number'

export default class Hand implements IHand {
  fingers: number

  constructor(options?: IHand) {
    this.fingers = options?.fingers ?? 5
  }

  /** Generates an amount of fingers. */
  private generateFingers(): number {
    return gaussian(1, 100) > 94 ? random(1, 4) : 5
  }

  generate(): IHand {
    return {
      fingers: this.generateFingers(),
    }
  }
}

export interface IHand {
  /** How many fingers the hand has. */
  fingers?: number
}
