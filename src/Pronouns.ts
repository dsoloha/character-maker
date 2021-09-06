import { capitalize } from '../lib/string'
import Character from './Character'

export default class Pronouns {
  _subject: { male: string; female: string; plural: string; neuter: string }
  _object: { male: string; female: string; plural: string; neuter: string }
  _possessiveDeterminer: {
    male: string
    female: string
    plural: string
    neuter: string
  }
  _possessivePronoun: {
    male: string
    female: string
    plural: string
    neuter: string
  }
  _reflexive: { male: string; female: string; plural: string; neuter: string }
  _noun: { male: string; female: string; plural: string; neuter: string }
  character: Character

  constructor(character: Character) {
    this._subject = {
      male: 'he',
      female: 'she',
      plural: 'they',
      neuter: 'it',
    }

    this._object = {
      male: 'him',
      female: 'her',
      plural: 'them',
      neuter: 'it',
    }

    this._possessiveDeterminer = {
      male: 'his',
      female: 'her',
      plural: 'their',
      neuter: 'its',
    }

    this._possessivePronoun = {
      male: 'his',
      female: 'hers',
      plural: 'theirs',
      neuter: 'its',
    }

    this._reflexive = {
      male: 'himself',
      female: 'herself',
      plural: 'themselves',
      neuter: 'itself',
    }

    this._noun = {
      male: 'man',
      female: 'woman',
      plural: 'people',
      neuter: 'thing',
    }

    this.character = character
  }

  get subject(): string {
    return this._subject[this.character.sex.type]
  }

  get object(): string {
    return this._object[this.character.sex.type]
  }

  get possessive(): string {
    return this._possessiveDeterminer[this.character.sex.type]
  }

  get possessivePronoun(): string {
    return this._possessivePronoun[this.character.sex.type]
  }

  get noun(): string {
    return this._noun[this.character.sex.type]
  }

  get reflexive(): string {
    return this._reflexive[this.character.sex.type]
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
