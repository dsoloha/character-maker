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

  constructor(options?: {
    color?: string
    length?: string | number
    style?: string
  }) {
    this.color = options?.color ?? 'black'
    this.length = options?.length ?? 'short'
    this.style = options?.style ?? 'straight'
  }
}
