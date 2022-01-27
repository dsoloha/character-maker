export default class Name implements IName {
  first: string
  middle: string | null
  last: string | null
  nicknames: string[]

  constructor(options?: IName) {
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

  generateFirst(): string {
    // TODO: hook this up to a database of first names
    const names: string[] = []

    names.push('John')

    return names.random()
  }

  generateMiddle(): string {
    // TODO: hook this up to a database of middle names
    const names: string[] = []

    names.push('Jacob')

    return names.random()
  }

  generateLast(): string {
    // TODO: hook this up to a database of last names
    const names: string[] = []

    names.push('Smith')

    return names.random()
  }

  generateNicknames(): string[] {
    // TODO: hook this up to a database of nicknames based on first name
    const names: string[] = []

    names.push('Johnny')

    return names
  }

  generate(): IName {
    return {
      first: this.generateFirst(),
      middle: this.generateMiddle(),
      last: this.generateLast(),
      nicknames: this.generateNicknames(),
    }
  }
}

export interface IName {
  /** The character's first name. */
  first?: string
  /** The character's middle name, if any. */
  middle?: string | null
  /** The character's last name, if any. */
  last?: string | null
  /** Any nicknames the character has. */
  nicknames?: string[]
}
