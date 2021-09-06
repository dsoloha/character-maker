export type SexType = 'male' | 'female'

export default class Sex {
  /** The biological sex of the character. */
  type: SexType

  constructor() {
    this.type = 'male'
  }
}
