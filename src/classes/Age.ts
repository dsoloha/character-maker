interface IBirth {
	/** The day of the month on which the character was born. */
	day: number;
	/** The month of the year on which the character was born. */
	month: number;
	/** The year during which the character was born. */
	year: number;
}

export default class Age {
	birth: IBirth;

	constructor() {
		this.birth = {
			day: 1,
			month: 1,
			year: 1,
		};
	}
}
