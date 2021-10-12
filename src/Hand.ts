export default class Hand implements IHand {
  fingers: number

  constructor(options?: IHand) {
    this.fingers = options?.fingers ?? 5
  }
}

export interface IHand {
  /** How many fingers the hand has. */
  fingers: number
}
