export default class Eyes {
  /** The player's eye color or eye colors if different. */
  color:
    | string
    | {
        /** The character's left eye color. */
        left: string
        /** The character's right eye color. */
        right: string
      }

  constructor() {
    this.color = 'blue'
  }
}
