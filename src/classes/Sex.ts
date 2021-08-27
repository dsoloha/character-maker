export type SexType = 'male' | 'female';

export default class Sex {
	/** Whether the character is male or female. */
	type: SexType;

	constructor() {
		this.type = 'male';
	}
}
