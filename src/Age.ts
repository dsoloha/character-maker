import { gaussian, random } from '../lib/number'

export default class Age implements IAge {
  birth: {
    day: number
    month: number
    year: number
  }

  constructor(options?: IAge) {
    this.birth = {
      day: options?.birth?.day ?? 1,
      month: options?.birth?.month ?? 1,
      year: options?.birth?.year ?? 1,
    }
  }

  /** Generates a new birth day. */
  private generateBirthDay(year: number, month: number): number {
    if (year % 4 === 0 && month === 2) return random(1, 29)
    if (month === 2) return random(1, 28)
    if ([1, 3, 5, 6, 8, 10, 12].includes(month)) return random(1, 31)
    return random(1, 30)
  }

  /** Generates a new birth month. */
  private generateBirthMonth(): number {
    return random(1, 12)
  }

  /** Generates a new birth year. */
  private generateBirthYear(): number {
    return gaussian(
      new Date().getFullYear() - 100,
      new Date().getFullYear(),
      0.75
    )
  }

  /** Generates a new, full birthday. */
  private generateBirth(): IBirth {
    const year = this.generateBirthYear()
    const month = this.generateBirthMonth()
    const day = this.generateBirthDay(year, month)

    return { day, month, year }
  }

  generate(): IAge {
    return {
      birth: this.generateBirth(),
    }
  }
}

export interface IAge {
  /** Properties pertaining to the character's birthtime. */
  birth?: IBirth
}

export interface IBirth {
  /** On which day of the month the character was born. */
  day?: number
  /** During which month of the year the character was born. */
  month?: number
  /** During what year the character was born. */
  year?: number
}
