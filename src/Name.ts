export default class Name {
  /** The character's first name. */
  first: string
  /** The character's middle name, if any. */
  middle: string | null
  /** The character's last name, if any. */
  last: string | null
  /** Any nicknames the character has. */
  nicknames: string[]

  constructor() {
    this.first = ''
    this.middle = null
    this.last = null
    this.nicknames = []
  }
}
