export default class Age implements IAge {
  birth: {
    day: number
    month: number
    year: number
  }

  constructor(options?: {
    birth?: {
      day?: number
      month?: number
      year?: number
    }
  }) {
    this.birth = {
      day: options?.birth?.day ?? 1,
      month: options?.birth?.month ?? 1,
      year: options?.birth?.year ?? 1,
    }
  }
}

export interface IAge {
  /** Properties pertaining to the character's birthtime. */
  birth: {
    /** On which day of the month the character was born. */
    day: number
    /** During which month of the year the character was born. */
    month: number
    /** During what year the character was born. */
    year: number
  }
}
