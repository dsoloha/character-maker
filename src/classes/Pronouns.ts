import type Character from './Character';
import { capitalize } from '../../lib/string';

interface IPronouns {
	/** The actor to whom the pronouns are assigned. */
	character: Character;
}

const Subject = {
	male: 'he',
	female: 'she',
	plural: 'they',
	neuter: 'it',
};

const Object = {
	male: 'him',
	female: 'her',
	plural: 'them',
	neuter: 'it',
};

const PossessiveDeterminer = {
	male: 'his',
	female: 'her',
	plural: 'their',
	neuter: 'its',
};

const PossessivePronoun = {
	male: 'his',
	female: 'hers',
	plural: 'theirs',
	neuter: 'its',
};

const Reflexive = {
	male: 'himself',
	female: 'herself',
	plural: 'themselves',
	neuter: 'itself',
};

const Noun = {
	male: 'man',
	female: 'woman',
	plural: 'people',
	neuter: 'thing',
};

export default class Pronouns implements IPronouns {
	character: Character;

	constructor(actor: Character) {
		this.character = actor;
	}

	get subject(): string {
		return Subject[this.character.sex.type];
	}

	get object(): string {
		return Object[this.character.sex.type];
	}

	get possessive(): string {
		return PossessiveDeterminer[this.character.sex.type];
	}

	get possessivePronoun(): string {
		return PossessivePronoun[this.character.sex.type];
	}

	get noun(): string {
		return Noun[this.character.sex.type];
	}

	get reflexive(): string {
		return Reflexive[this.character.sex.type];
	}

	get he(): string {
		return this.subject;
	}

	get He(): string {
		return capitalize(this.he);
	}

	get him(): string {
		return this.object;
	}

	get Him(): string {
		return capitalize(this.him);
	}

	get his(): string {
		return this.possessive;
	}

	get His(): string {
		return capitalize(this.his);
	}

	get himself(): string {
		return this.reflexive;
	}

	get Himself(): string {
		return capitalize(this.himself);
	}

	get boy(): string {
		return this.noun;
	}

	get she(): string {
		return this.subject;
	}

	get She(): string {
		return capitalize(this.she);
	}

	get her(): string {
		return this.object;
	}

	get Her(): string {
		return capitalize(this.her);
	}

	get hers(): string {
		return this.possessive;
	}

	get Hers(): string {
		return capitalize(this.hers);
	}

	get herself(): string {
		return this.reflexive;
	}

	get Herself(): string {
		return capitalize(this.herself);
	}

	get girl(): string {
		return this.noun;
	}

	get man(): string {
		return this.noun === Noun.male ? 'man' : 'woman';
	}

	get men(): string {
		return this.noun === Noun.male ? 'men' : 'women';
	}

	get woman(): string {
		return this.noun === Noun.female ? 'woman' : 'man';
	}

	get women(): string {
		return this.noun === Noun.male ? 'women' : 'men';
	}

	get father(): string {
		return this.noun === Noun.male ? 'father' : 'mother';
	}

	get mother(): string {
		return this.noun === Noun.female ? 'mother' : 'father';
	}

	get son(): string {
		return this.noun === Noun.male ? 'son' : 'daughter';
	}

	get sons(): string {
		return this.noun === Noun.male ? 'sons' : 'daughters';
	}

	get daughter(): string {
		return this.noun === Noun.female ? 'daughter' : 'son';
	}

	get daughters(): string {
		return this.noun === Noun.female ? 'daughter' : 'sons';
	}

	get brother(): string {
		return this.noun === Noun.male ? 'brother' : 'sister';
	}

	get sister(): string {
		return this.noun === Noun.female ? 'sister' : 'brother';
	}

	get husband(): string {
		return this.noun === Noun.male ? 'husband' : 'wife';
	}

	get wife(): string {
		return this.noun === Noun.female ? 'wife' : 'husband';
	}

	get wives(): string {
		return this.noun === Noun.female ? 'wives' : 'husbands';
	}
}

// export function getPronouns(actor: Character): Pronouns {
// 	return new Pronouns(actor);
// }
