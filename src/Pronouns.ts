import { capitalize } from '../lib/string'
import { SexType } from './Sex'

export default class Pronouns {
  sex: SexType

  constructor(sex: SexType) {
    this.sex = sex
  }

  get subject(): string {
    const subject = {
      male: 'he',
      female: 'she',
      plural: 'they',
      neuter: 'it',
    }

    return subject[this.sex]
  }

  get object(): string {
    const object = {
      male: 'him',
      female: 'her',
      plural: 'them',
      neuter: 'it',
    }

    return object[this.sex]
  }

  get possessive(): string {
    const possessiveDeterminer = {
      male: 'his',
      female: 'her',
      plural: 'their',
      neuter: 'its',
    }

    return possessiveDeterminer[this.sex]
  }

  get possessivePronoun(): string {
    const possessivePronoun = {
      male: 'his',
      female: 'hers',
      plural: 'theirs',
      neuter: 'its',
    }

    return possessivePronoun[this.sex]
  }

  get noun(): string {
    const noun = {
      male: 'man',
      female: 'woman',
      plural: 'people',
      neuter: 'thing',
    }

    return noun[this.sex]
  }

  get reflexive(): string {
    const reflexive = {
      male: 'himself',
      female: 'herself',
      plural: 'themselves',
      neuter: 'itself',
    }

    return reflexive[this.sex]
  }

  get he(): string {
    return this.subject
  }

  get He(): string {
    return capitalize(this.he)
  }

  get him(): string {
    return this.object
  }

  get Him(): string {
    return capitalize(this.him)
  }

  get his(): string {
    return this.possessive
  }

  get His(): string {
    return capitalize(this.his)
  }

  get himself(): string {
    return this.reflexive
  }

  get Himself(): string {
    return capitalize(this.himself)
  }

  get she(): string {
    return this.subject
  }

  get She(): string {
    return capitalize(this.she)
  }

  get her(): string {
    return this.object
  }

  get Her(): string {
    return capitalize(this.her)
  }

  get hers(): string {
    return this.possessive
  }

  get Hers(): string {
    return capitalize(this.hers)
  }

  get herself(): string {
    return this.reflexive
  }

  get Herself(): string {
    return capitalize(this.herself)
  }
}
