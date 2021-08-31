import { capitalize } from "./lib/string";

const Subject = {
  male: "he",
  female: "she",
  plural: "they",
  neuter: "it",
};

const Object = {
  male: "him",
  female: "her",
  plural: "them",
  neuter: "it",
};

const PossessiveDeterminer = {
  male: "his",
  female: "her",
  plural: "their",
  neuter: "its",
};

const PossessivePronoun = {
  male: "his",
  female: "hers",
  plural: "theirs",
  neuter: "its",
};

const Reflexive = {
  male: "himself",
  female: "herself",
  plural: "themselves",
  neuter: "itself",
};

const Noun = {
  male: "man",
  female: "woman",
  plural: "people",
  neuter: "thing",
};

class Age {
  constructor() {
    this.birth = {
      day: 1,
      month: 1,
      year: 1,
    };
  }
}

class Background {
  constructor() {
    this.birthplace = null;
  }
}

class Eyes {
  constructor() {
    this.color = null;
  }
}

class Hair {
  constructor() {
    this.color = null;
    this.length = null;
    this.style = null;
  }
}

class Name {
  constructor() {
    this.first = null;
    this.middle = null;
    this.last = null;
    this.nicknames = [];
  }

  get full() {
    const name = [];

    if (this.first) name.push(this.first);
    if (this.middle) name.push(this.middle);
    if (this.last) name.push(this.last);

    return name.join(" ");
  }
}

class Pronouns {
  constructor(character) {
    this.character = character;
  }

  get subject() {
    return Subject[this.character.sex.type];
  }

  get object() {
    return Object[this.character.sex.type];
  }

  get possessive() {
    return PossessiveDeterminer[this.character.sex.type];
  }

  get possessivePronoun() {
    return PossessivePronoun[this.character.sex.type];
  }

  get noun() {
    return Noun[this.character.sex.type];
  }

  get reflexive() {
    return Reflexive[this.character.sex.type];
  }

  get he() {
    return this.subject;
  }

  get He() {
    return capitalize(this.he);
  }

  get him() {
    return this.object;
  }

  get Him() {
    return capitalize(this.him);
  }

  get his() {
    return this.possessive;
  }

  get His() {
    return capitalize(this.his);
  }

  get himself() {
    return this.reflexive;
  }

  get Himself() {
    return capitalize(this.himself);
  }

  get boy() {
    return this.noun;
  }

  get she() {
    return this.subject;
  }

  get She() {
    return capitalize(this.she);
  }

  get her() {
    return this.object;
  }

  get Her() {
    return capitalize(this.her);
  }

  get hers() {
    return this.possessive;
  }

  get Hers() {
    return capitalize(this.hers);
  }

  get herself() {
    return this.reflexive;
  }

  get Herself() {
    return capitalize(this.herself);
  }

  get girl() {
    return this.noun;
  }

  get man() {
    return this.noun === Noun.male ? "man" : "woman";
  }

  get men() {
    return this.noun === Noun.male ? "men" : "women";
  }

  get woman() {
    return this.noun === Noun.female ? "woman" : "man";
  }

  get women() {
    return this.noun === Noun.male ? "women" : "men";
  }

  get father() {
    return this.noun === Noun.male ? "father" : "mother";
  }

  get mother() {
    return this.noun === Noun.female ? "mother" : "father";
  }

  get son() {
    return this.noun === Noun.male ? "son" : "daughter";
  }

  get sons() {
    return this.noun === Noun.male ? "sons" : "daughters";
  }

  get daughter() {
    return this.noun === Noun.female ? "daughter" : "son";
  }

  get daughters() {
    return this.noun === Noun.female ? "daughter" : "sons";
  }

  get brother() {
    return this.noun === Noun.male ? "brother" : "sister";
  }

  get sister() {
    return this.noun === Noun.female ? "sister" : "brother";
  }

  get husband() {
    return this.noun === Noun.male ? "husband" : "wife";
  }

  get wife() {
    return this.noun === Noun.female ? "wife" : "husband";
  }

  get wives() {
    return this.noun === Noun.female ? "wives" : "husbands";
  }
}

class Sex {
  constructor() {
    this.type = "male";
  }
}

class Character {
  constructor() {
    this.age = new Age();
    this.background = new Background();
    this.eyes = new Eyes();
    this.hair = new Hair();
    this.name = new Name();
    this.pronouns = new Pronouns(this);
    this.sex = new Sex();
  }
}

module.exports = {
  default: Character,
  Age,
  Background,
  Eyes,
  Hair,
  Name,
  Pronouns,
  Sex,
}
