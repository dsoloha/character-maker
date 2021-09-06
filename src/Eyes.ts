export default class Eyes {
  /** The player's eye color or eye colors if different. */
  color:
    | string
    | {
        left: string
        right: string
      }

  constructor() {
    this.color = 'blue'
  }
}
