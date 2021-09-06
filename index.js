const capitalize = require("./lib/string");

function generateAge(options) {
  return {
    birth: {
      day: options.birthday || 1,
      month: options.birthmonth || 1,
      year: options.birthyear || 1,
    },
  };
}

function generateBackground(options) {
  return {
    birthplace: options.birthplace || null,
  };
}

function generateEyes(options) {
  return {
    color: options.color || null,
  };
}

function generateHair(options) {
  return {
    color: options.color || null,
    length: options.length || null,
    style: options.style || null,
  };
}

function generateName(options) {
  return {
    first: options.first || null,
    middle: options.middle || null,
    last: options.last || null,
    nicknames: options.nicknames || [],
    full() {
      const name = [];

      if (this.first) name.push(this.first);
      if (this.middle) name.push(this.middle);
      if (this.last) name.push(this.last);

      return name.join(" ");
    },
  };
}

function generatePronouns(sex) {
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

  return {
    subject() {
      return Subject[sex];
    },
    object() {
      return Object[sex];
    },
    possessive() {
      return PossessiveDeterminer[sex];
    },
    possessivePronoun() {
      return PossessivePronoun[sex];
    },
    noun() {
      return Noun[sex];
    },
    reflexive() {
      return Reflexive[sex];
    },
    he() {
      return this.subject;
    },
    He() {
      return capitalize(this.he);
    },
    him() {
      return this.object;
    },
    Him() {
      return capitalize(this.him);
    },
    his() {
      return this.possessive;
    },
    His() {
      return capitalize(this.his);
    },
    himself() {
      return this.reflexive;
    },
    Himself() {
      return capitalize(this.himself);
    },
    boy() {
      return this.noun;
    },
    she() {
      return this.subject;
    },
    She() {
      return capitalize(this.she);
    },
    her() {
      return this.object;
    },
    Her() {
      return capitalize(this.her);
    },
    hers() {
      return this.possessive;
    },
    Hers() {
      return capitalize(this.hers);
    },
    herself() {
      return this.reflexive;
    },
    Herself() {
      return capitalize(this.herself);
    },
    girl() {
      return this.noun;
    },
    man() {
      return this.noun === Noun.male ? "man" : "woman";
    },
    men() {
      return this.noun === Noun.male ? "men" : "women";
    },
    woman() {
      return this.noun === Noun.female ? "woman" : "man";
    },
    women() {
      return this.noun === Noun.male ? "women" : "men";
    },
    father() {
      return this.noun === Noun.male ? "father" : "mother";
    },
    mother() {
      return this.noun === Noun.female ? "mother" : "father";
    },
    son() {
      return this.noun === Noun.male ? "son" : "daughter";
    },
    sons() {
      return this.noun === Noun.male ? "sons" : "daughters";
    },
    daughter() {
      return this.noun === Noun.female ? "daughter" : "son";
    },
    daughters() {
      return this.noun === Noun.female ? "daughter" : "sons";
    },
    brother() {
      return this.noun === Noun.male ? "brother" : "sister";
    },
    sister() {
      return this.noun === Noun.female ? "sister" : "brother";
    },
    husband() {
      return this.noun === Noun.male ? "husband" : "wife";
    },
    wife() {
      return this.noun === Noun.female ? "wife" : "husband";
    },
    wives() {
      return this.noun === Noun.female ? "wives" : "husbands";
    },
  };
}

function generateSex(options) {
  return {
    type: options.type || "male",
  }
}

function generateCharacter(options = {}) {
  const age = generateAge(options.age);
  const background = generateBackground(options.background);
  const eyes = generateEyes(options.eyes);
  const hair = generateHair(options.hair);
  const name = generateName(options.name);
  const sex = generateSex(options.sex);
  const pronouns = generatePronouns(sex);

  return { age, background, eyes, hair, name, sex, pronouns };
}

module.exports = generateCharacter;
