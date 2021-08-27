export default class Name {
	/** The character's first name. */
	first: string;
	/** The character's middle name. */
	middle: string;
	/** The character's last name. */
	last: string;
	/** Any nicknames the character has. */
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

		return name.join(' ');
	}
}
