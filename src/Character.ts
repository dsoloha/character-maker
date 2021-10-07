import Age, { IAge } from './Age'
import Arms, { IArms } from './Arms'
import Background, { IBackground } from './Background'
import Chest, { IChest } from './Chest'
import Crotch, { ICrotch } from './Crotch'
import Eyes, { IEyes } from './Eyes'
import Hair, { IHairs } from './Hair'
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
  build: string
  chest: Chest
  crotch: Crotch
  eyes: Eyes
  hair: Hair
  height: number
  legs: Legs | null
  mouth: Mouth
  muscles: string
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
  weight: number

  constructor(options?: ICharacter) {
    this.age = new Age(options?.age)
    this.arms = null
    this.background = new Background(options?.background)
    this.build = options?.build ?? ''
    this.chest = new Chest(options?.chest)
    this.crotch = new Crotch(options?.crotch)
    this.eyes = new Eyes(options?.eyes)
    this.hair = new Hair(options?.hair)
    this.height = options?.height ?? 0
    this.legs = null
    this.mouth = new Mouth(options?.mouth)
    this.muscles = options?.muscles ?? ''
    this.name = new Name(options?.name)
    this.neck = new Neck(options?.neck)
    this.nose = new Nose(options?.nose)
    this.sex = new Sex(options?.sex)
    this.shoulders = new Shoulders(options?.shoulders)
    this.skin = new Skin(options?.skin)
    this.speech = new Speech(options?.speech)
    this.stomach = new Stomach(options?.stomach)
    this.waist = new Waist(options?.waist)
    this.weight = options?.weight ?? 0

    this.pronouns = new Pronouns(this.sex.type)
    this.sexuality = new Sexuality(this.sex.type, options?.sexuality)
  }
}

export interface ICharacter {
  /** Properties pertaining to the character's age. */
  age?: IAge
  /** Properties pertaining to the character's arms. */
  arms?: IArms | null
  /** Properties pertaining to the character's background and upbringing. */
  background?: IBackground
  /** The character's build (lithe, stocky, etc). */
  build?: string
  /** Properties pertaining to the character's chest. */
  chest?: IChest
  /** Properties pertaining to the character's crotch. */
  crotch?: ICrotch
  /** Properties pertaining to the character's eyes. */
  eyes?: IEyes
  /** Properties pertaining to all hair on the character's body. */
  hair?: IHairs
  /** How tall the character is, in cm. */
  height?: number
  /** Properties pertaining to the character's legs. */
  legs?: ILegs | null
  /** Properties pertaining to the character's mouth. */
  mouth?: IMouth
  /** How muscular the character is. */
  muscles?: string
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
  /** How much the character weighs, in kg. */
  weight?: number
}
