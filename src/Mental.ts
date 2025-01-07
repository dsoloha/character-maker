import Background, { IBackground } from './Background'
import Health, { IHealth } from './Health'
import Personality, { IPersonality } from './Personality'
import Relations, { IRelations } from './Relations'
import Sexuality, { ISexuality } from './Sexuality'
import Skills, { ISkills } from './Skills'
import Speech, { ISpeech } from './Speech'
import { SexType } from './Sex'

export default class Mental implements IMental {
  background: IBackground
  health: IHealth
  personality: IPersonality
  relations: IRelations
  sexuality: ISexuality
  skills: ISkills
  speech: ISpeech

  constructor(options: { sex: SexType } = { sex: 'male' }) {
    this.background = new Background().generate()
    this.health = new Health().generate()
    this.personality = new Personality().generate()
    this.relations = new Relations()
    this.sexuality = new Sexuality(options.sex).generate()
    this.skills = new Skills()
    this.speech = new Speech().generate()
  }
}

export interface IMental {
  background: IBackground
  health: IHealth
  personality: IPersonality
  relations: IRelations
  sexuality: ISexuality
  skills: ISkills
  speech: ISpeech
}
