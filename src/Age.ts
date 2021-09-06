export default class Age {
  /** Properties pertaining to the character's birthtime. */
  birth: {
    /** On which day of the month the character was born. */
    day: 1
    /** During which month of the year the character was born.*/
    month: 1
    /** During what year the character was born. */
    year: 1
  }

  constructor() {
    this.birth = {
      day: 1,
      month: 1,
      year: 1,
    }
  }
}
