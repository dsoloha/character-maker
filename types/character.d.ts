/** The base character class. */
export declare class Character {
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
}

/** A class containing properties related to the character's age. */
export declare class Age {
  /** Properties pertaining to the character's birthtime. */
	birth: {
		/** The day of the month on which the character was born. */
		day: number;
		/** The month of the year on which the character was born. */
		month: number;
		/** The year during which the character was born. */
		year: number;
	}
}

/** A class containing background information about the character. */
export declare class Background {
  /** Where the character was born. */
	birthplace: string;
}

/** A class containing properties related to the character's eyes. */
export declare class Eyes {
  /** The color of the character's eyes. */
  color: string;
}

/** A class containing properties related to the character's hair. */
export declare class Hair {
  /** The character's hair color. */
	color: string;
	/** How long the character's hair is. */
	length: string;
	/** The character's hairstyle. */
	style: string;
}

/** A class containing properties related to the character's name. */
export declare class Name {
  /** The character's first name. */
	first: string;
	/** The character's middle name. */
	middle: string;
	/** The character's last name. */
	last: string;
	/** Any nicknames the character has. */
	nicknames: string[];
}

/** The type of sex the character is. */
export type SexType = 'male' | 'female';

/** A class containing properties related to the character's sex. */
export declare class Sex {
  /** Whether the character is male or female. */
	type: SexType;
}
