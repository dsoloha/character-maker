export default class Hair {
  /** The color of the character's hair. */
  color: string
  /**
   * The length of the character's hair.
   *
   * Accepts either a descriptor ("short", "buzzed", etc.) or an integer in centimeters.
   */
  length: string | number
  /** The style of the character's hair. */
  style: string

  constructor() {
    this.color = 'black'
    this.length = 'shoulder-length'
    this.style = 'straight'
  }
}
