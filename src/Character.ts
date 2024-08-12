import { gaussian } from '../lib/number'
import Age, { IAge } from './Age'
import Arms, { IArms } from './Arms'
import Background, { IBackground } from './Background'
import Build, { IBuild } from './Build'
import Chest, { IChest } from './Chest'
import Crotch, { ICrotch } from './Crotch'
import Eyes, { IEyes } from './Eyes'
import Hair, { IHairs } from './Hair'
import Health, { IHealth } from './Health'
import Legs, { ILegs } from './Legs'
import Mouth, { IMouth } from './Mouth'
import Name, { IName } from './Name'
import Neck, { INeck } from './Neck'
import Nose, { INose } from './Nose'
import Pronouns from './Pronouns'
import Sex, { ISex } from './Sex'
import Sexuality, { ISexuality } from './Sexuality'
import Shoulders, { IShoulders } from './Shoulders'
import Skin, { ISkin } from './Skin'
import Speech, { ISpeech } from './Speech'
import Stomach, { IStomach } from './Stomach'
import Waist, { IWaist } from './Waist'

/** The base character class. */
export default class Character implements ICharacter {
  age: Age
  arms: Arms | null
  background: Background
  build: Build
  chest: Chest
  crotch: Crotch
  eyes: Eyes
  hair: Hair
  health: Health
  legs: Legs | null
  mouth: Mouth
  name: Name
  neck: Neck
  nose: Nose
  pronouns: Pronouns
  sex: Sex
  sexuality: Sexuality
  shoulders: Shoulders
  skin: Skin
  speech: Speech
  stomach: Stomach
  waist: Waist

  constructor(options?: ICharacter) {
    this.age = new Age(options?.age)
    this.arms = null
    this.background = new Background(options?.background)
    this.build = new Build(options?.build)
    this.chest = new Chest(options?.chest)
    this.crotch = new Crotch(options?.crotch)
    this.eyes = new Eyes(options?.eyes)
    this.health = new Health(options?.health)
    this.hair = new Hair(options?.hair)
    this.legs = null
    this.mouth = new Mouth(options?.mouth)
    this.name = new Name(options?.name)
    this.neck = new Neck(options?.neck)
    this.nose = new Nose(options?.nose)
    this.sex = new Sex(options?.sex)
    this.shoulders = new Shoulders(options?.shoulders)
    this.skin = new Skin(options?.skin)
    this.speech = new Speech(options?.speech)
    this.stomach = new Stomach(options?.stomach)
    this.waist = new Waist(options?.waist)

    this.pronouns = new Pronouns(this.sex.type)
    this.sexuality = new Sexuality(this.sex.type, options?.sexuality)
  }

  generate(): ICharacter {
    return {
      age: this.age.generate(),
      background: this.background.generate(),
      build: this.build.generate(),
      arms: this.arms?.generate(this.build.muscles ?? gaussian(0, 100)),
      chest: this.chest.generate(),
      crotch: this.crotch.generate(),
      eyes: this.eyes.generate(),
      health: this.health.generate(),
      hair: this.hair.generate(),
      legs: this.legs?.generate(),
      mouth: this.mouth.generate(),
      name: this.name.generate(),
      neck: this.neck.generate(),
      nose: this.nose.generate(),
      sex: this.sex.generate(),
      shoulders: this.shoulders.generate(),
      skin: this.skin.generate(),
      speech: this.speech.generate(),
      stomach: this.stomach.generate(),
      waist: this.waist.generate(),
    }
  }
}

export interface ICharacter {
  /** Properties pertaining to the character's age. */
  age?: IAge
  /** Properties pertaining to the character's arms. */
  arms?: IArms | null
  /** Properties pertaining to the character's background and upbringing. */
  background?: IBackground
  /** Properties pertaining to the character's physical build. */
  build?: IBuild
  /** Properties pertaining to the character's chest. */
  chest?: IChest
  /** Properties pertaining to the character's crotch. */
  crotch?: ICrotch
  /** Properties pertaining to the character's eyes. */
  eyes?: IEyes
  /** Properties pertaining to all hair on the character's body. */
  hair?: IHairs
  /** Properties pertaining to the character's overall health. */
  health?: IHealth
  /** Properties pertaining to the character's legs. */
  legs?: ILegs | null
  /** Properties pertaining to the character's mouth. */
  mouth?: IMouth
  /** Properties pertaining to the character's name. */
  name?: IName
  /** Properties pertaining to the character's neck. */
  neck?: INeck
  /** Properties pertaining to the character's nose. */
  nose?: INose
  /** The pronouns assigned to the character. */
  pronouns?: Pronouns
  /** Properties pertaining to the character's biological sex. */
  sex?: ISex
  /** Properties pertaining to the character's sexuality. */
  sexuality?: ISexuality
  /** Properties pertaining to the character's shoulders. */
  shoulders?: IShoulders
  /** Properties pertaining to the character's skin. */
  skin?: ISkin
  /** Properties pertaining to the character's speech. */
  speech?: ISpeech
  /** Properties pertaining to the character's stomach. */
  stomach?: IStomach
  /** Properties pertaining to the character's waist. */
  waist?: IWaist
}
