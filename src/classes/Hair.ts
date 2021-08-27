interface IHair {
	/** The character's hair color. */
	color: string;
	/** How long the character's hair is. */
	length: string;
	/** The character's hairstyle. */
	style: string;
}

export default class Hair implements IHair {
	color: string;
	length: string;
	style: string;

	constructor() {
		this.color = null;
		this.length = null;
		this.style = null;
	}
}
