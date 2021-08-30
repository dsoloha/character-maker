export default class Name {
  first: string;
  middle: string;
  last: string;
  nicknames: string[];

  constructor() {
    this.first = null;
    this.middle = null;
    this.last = null;
    this.nicknames = [];
  }

  /** Returns the character's full name. */
  get full(): string {
    const name = [];

    if (this.first) name.push(this.first);
    if (this.middle) name.push(this.middle);
    if (this.last) name.push(this.last);

    return name.join(" ");
  }
}
