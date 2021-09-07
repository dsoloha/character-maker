import Age from './Age'
import Background from './Background'
import Eyes from './Eyes'
import Hair from './Hair'
import Name from './Name'
import Pronouns from './Pronouns'
import Sex from './Sex'

/** The base character class. */
export default class Character {
  /** Properties pertaining to the character's age. */
  age: Age
  /** Properties pertaining to the character's background and upbringing. */
  background: Background
  /** Properties pertaining to the character's eyes. */
  eyes: Eyes
  /** Properties pertaining to all hair on the character's body. */
  hair: Hair
  /** Properties pertaining to the character's name. */
  name: Name
  /** The pronouns assigned to the character. */
  pronouns: Pronouns
  /**
   * Properties pertaining to the character's biological sex.
   *
   * **Note:** this does not include gender. This will be found in an upcoming `Sexuality` class.
   */
  sex: Sex

  constructor(options?: {
    age?: {
      birth?: {
        day?: number
        month?: number
        year?: number
      }
    }
    background?: {
      birthplace?: string
    }
    eyes?: {
      color?:
        | string
        | {
            left: string
            right: string
          }
    }
    hair?: {
      color?: string
      length?: string | number
      style?: string
    }
    name: {
      first?: string
      middle?: string | null
      last?: string | null
      nicknames?: string[]
    }
  }) {
    this.age = new Age(options?.age)
    this.background = new Background(options?.background)
    this.eyes = new Eyes(options?.eyes)
    this.hair = new Hair(options?.hair)
    this.name = new Name(options?.name)
    this.sex = new Sex()

    this.pronouns = new Pronouns(this.sex.type)
  }
}
