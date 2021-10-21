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

  /** Generates a new birth date. */
  generateBirth(): IBirth {
    let day: number

    const year = gaussian(
      new Date().getFullYear() - 100,
      new Date().getFullYear(),
      0.75
    )

    const month = random(1, 12)

    if (year % 4 === 0 && month === 2) day = random(1, 29)
    else if (month === 2) day = random(1, 28)
    else if ([1, 3, 5, 6, 8, 10, 12].includes(month)) day = random(1, 31)
    else day = random(1, 30)

    return {
      year,
      month,
      day,
    }
  }

  /** Generates a new random age. */
  generate(): IAge {
    const age = {
      birth: this.generateBirth(),
    }

    return age
  }
}

export interface IAge {
  /** Properties pertaining to the character's birthtime. */
  birth?: IBirth
}

export interface IBirth {
  /** On which day of the month the character was born. */
  day: number
  /** During which month of the year the character was born. */
  month: number
  /** During what year the character was born. */
  year: number
}
