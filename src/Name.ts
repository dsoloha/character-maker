export default class Name {
  /** The character's first name. */
  first: string
  /** The character's middle name, if any. */
  middle: string | null
  /** The character's last name, if any. */
  last: string | null
  /** Any nicknames the character has. */
  nicknames: string[]

  constructor(options?: {
    first?: string
    middle?: string | null
    last?: string | null
    nicknames?: string[]
  }) {
    this.first = options?.first ?? ''
    this.middle = options?.middle ?? null
    this.last = options?.last ?? null
    this.nicknames = options?.nicknames ?? []
  }

  /** Returns the character's full name, or as much as possible. */
  get full(): string {
    const name: string[] = []

    if (this.first) name.push(this.first)
    if (this.middle) name.push(this.middle)
    if (this.last) name.push(this.last)

    return name.join(' ')
  }
}
