interface IBackground {
	/** Where the character was born. */
	birthplace: string;
}

export default class Background implements IBackground {
	birthplace: string;

	constructor() {
		this.birthplace = null;
	}
}
