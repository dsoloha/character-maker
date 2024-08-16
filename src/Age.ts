import { gaussian, random } from '../lib/number'

export default class Age implements IAge {
  birth: {
    day: number
    month: number
    year: number
  }

  constructor(options?: IAge) {
    const year = options?.birth?.year ?? this.generateBirthYear()
    const month = options?.birth?.month ?? this.generateBirthMonth()
    const day = options?.birth?.day ?? this.generateBirthDay(year, month)

    this.birth = {
      day,
      month,
      year,
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
  private generateBirthMonth({ month } = { month: 0 }): number {
    month = month || random(1, 12)

    return month
  }

  /** Generates a new birth year. */
  private generateBirthYear({ year } = { year: 0 }): number {
    year =
      year ||
      gaussian(new Date().getFullYear() - 100, new Date().getFullYear(), 0.75)

    return year
  }

  /** Generates a new, full birthday. */
  private generateBirth(
    { year, month, day } = { year: 0, month: 0, day: 0 }
  ): IBirth {
    year = year || this.generateBirthYear({ year })
    month = month || this.generateBirthMonth({ month })
    day = day || this.generateBirthDay(year, month)

    return { day, month, year }
  }

  generate(
    { year, month, day } = {
      year: 0,
      month: 0,
      day: 0,
    }
  ): IAge {
    return {
      birth: this.generateBirth({ year, month, day }),
    }
  }

  /** Returns the character's age, in months. */
  get monthsOld(): number {
    const birthYear = this.birth.year
    const birthMonth = this.birth.month
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    const differenceYear = currentYear - birthYear
    const differenceMonth = currentMonth - birthMonth

    return differenceYear * 12 + differenceMonth
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
