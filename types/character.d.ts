/** The base character class. */
export declare class ICharacter {
  /** Properties pertaining to the character's age. */
  age: IAge;
  /** Properties pertaining to the character's background. */
  background: IBackground;
  /** Properties pertaining to the character's eyes. */
  eyes: IEyes;
  /** Properties pertaining to the character's hair. */
  hair: IHair;
  /** Properties pertaining to the character's name and nicknames. */
  name: IName;
  /** Properties pertaining to the character's sex and gender. */
  sex: ISex;
}

/** A class containing properties related to the character's age. */
export declare class IAge {
  /** Properties pertaining to the character's birthtime. */
  birth: {
    /** The day of the month on which the character was born. */
    day: number;
    /** The month of the year on which the character was born. */
    month: number;
    /** The year during which the character was born. */
    year: number;
  };
}

/** A class containing background information about the character. */
export declare class IBackground {
  /** Where the character was born. */
  birthplace: string;
}

/** A class containing properties related to the character's eyes. */
export declare class IEyes {
  /** The color of the character's eyes. */
  color: string;
}

/** A class containing properties related to the character's hair. */
export declare class IHair {
  /** The character's hair color. */
  color: string;
  /** How long the character's hair is. */
  length: string;
  /** The character's hairstyle. */
  style: string;
}

/** A class containing properties related to the character's name. */
export declare class IName {
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
export type SexType = "male" | "female";

/** A class containing properties related to the character's sex. */
export declare class ISex {
  /** Whether the character is male or female. */
  type: SexType;
}
