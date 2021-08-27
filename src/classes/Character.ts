import Age from './Age';
import Background from './Background';
import Eyes from './Eyes';
import Hair from './Hair';
import Name from './Name';
import Sex from './Sex';

export default class Character {
	/** Properties pertaining to the character's age. */
	age: Age;
	/** Properties pertaining to the character's background. */
	background: Background;
	/** Properties pertaining to the character's eyes. */
	eyes: Eyes;
	/** Properties pertaining to the character's hair. */
	hair: Hair;
	/** Properties pertaining to the character's name and nicknames. */
	name: Name;
	/** Properties pertaining to the character's sex and gender. */
	sex: Sex;

	constructor() {
		this.age = new Age();
		this.background = new Background();
		this.eyes = new Eyes();
		this.hair = new Hair();
		this.name = new Name();
		this.sex = new Sex();
	}
}
