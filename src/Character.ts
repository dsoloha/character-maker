import Age from './Age'
import Arms from './Arms'
import Background from './Background'
import Chest from './Chest'
import Crotch from './Crotch'
import Eyes from './Eyes'
import Hair, { IHair } from './Hair'
import Health from './Health'
import Legs from './Legs'
import Mouth from './Mouth'
import Name from './Name'
import Neck from './Neck'
import Nose from './Nose'
import Pronouns from './Pronouns'
import Sex, { SexType } from './Sex'
import Sexuality from './Sexuality'
import Shoulders from './Shoulders'
import Skin from './Skin'
import Speech from './Speech'
import Stomach from './Stomach'
import Waist from './Waist'

/** The base character class. */
export default class Character {
  /** Properties pertaining to the character's age. */
  age: Age
  /** Properties pertaining to the character's arms. */
  arms: Arms
  /** Properties pertaining to the character's background and upbringing. */
  background: Background
  /** Properties pertaining to the character's chest. */
  chest: Chest
  /** Properties pertaining to the character's crotch. */
  crotch: Crotch
  /** Properties pertaining to the character's eyes. */
  eyes: Eyes
  /** Properties pertaining to all hair on the character's body. */
  hair: Hair
  /** Properties pertaining to the character's health. */
  health: Health
  /** Properties pertaining to the character's legs. */
  legs: Legs
  /** Properties pertaining to the character's mouth. */
  mouth: Mouth
  /** Properties pertaining to the character's name. */
  name: Name
  /** Properties pertaining to the character's neck. */
  neck: Neck
  /** Properties pertaining to the character's nose. */
  nose: Nose
  /** The pronouns assigned to the character. */
  pronouns: Pronouns
  /** Properties pertaining to the character's biological sex. */
  sex: Sex
  /** Properties pertaining to the character's sexuality. */
  sexuality: Sexuality
  /** Properties pertaining to the character's shoulders. */
  shoulders: Shoulders
  /** Properties pertaining to the character's skin. */
  skin: Skin
  /** Properties pertaining to the character's speech. */
  speech: Speech
  /** Properties pertaining to the character's stomach. */
  stomach: Stomach
  /** Properties pertaining to the character's waist. */
  waist: Waist

  constructor(options?: {
    age?: {
      birth?: {
        day?: number
        month?: number
        year?: number
      }
    }
    arms?: {
      left?: {
        size: string
      }
      right?: {
        size: string
      }
    }
    background?: {
      birthplace?: string
      education?: {
        school: string
        length: number
      }
      nationality?: string
      occupation?: {
        type: string
        length: number
        income: number
      }
    }
    chest?: {
      size?: string
    }
    crotch?: {
      ovaries?: {
        menopause: boolean
      } | null
      penis?: {
        size: string
      } | null
      testicles?: {
        size: string
        vasectomy: boolean
      } | null
      vagina?: {
        description: string
      }
    }
    eyes?: {
      color?: string
      colors?: {
        left: string
        right: string
      }
    }
    hair?: {
      arm?: IHair
      head?: IHair
      face?: IHair
      underarms?: IHair
      chest?: IHair
      pubic?: IHair
      leg?: IHair
    }
    health?: {
      illnesses?: string[]
      injuries: string[]
    }
    legs?: {
      left?: {
        size: string
      }
      right?: {
        size: string
      }
    }
    mouth?: {
      teeth?: {
        count: number
        description: string
      }
      tongue?: boolean
    }
    name?: {
      first?: string
      middle?: string | null
      last?: string | null
      nicknames?: string[]
    }
    neck?: {
      larynx?: boolean
    }
    nose?: {
      anosmia?: boolean
    }
    sex?: {
      type: SexType
    }
    sexuality?: {
      gender?: string
    }
    shoulders?: {
      width?: string
    }
    skin?: {
      color?: string
      scars?: Array<{
        location: string
        description: string
      }> | null
      tattoos?: Array<{
        location: string
        description: string
      }>
      birthmarks?: Array<{
        location: string
        description: string
      }>
      brands?: Array<{
        location: string
        description: string
      }>
    }
    speech?: {
      style?: string
    }
    stomach?: {
      shape?: string
    }
    waist?: {
      size?: string
    }
  }) {
    this.age = new Age(options?.age)
    this.arms = new Arms(options?.arms)
    this.background = new Background(options?.background)
    this.chest = new Chest(options?.chest)
    this.crotch = new Crotch(options?.crotch)
    this.eyes = new Eyes(options?.eyes)
    this.hair = new Hair(options?.hair)
    this.health = new Health(options?.health)
    this.legs = new Legs(options?.legs)
    this.mouth = new Mouth(options?.mouth)
    this.name = new Name(options?.name)
    this.neck = new Neck(options?.neck)
    this.nose = new Nose(options?.nose)
    this.sex = new Sex(options?.sex)
    this.sexuality = new Sexuality(this.sex.type, options?.sexuality)
    this.shoulders = new Shoulders(options?.shoulders)
    this.skin = new Skin(options?.skin)
    this.speech = new Speech(options?.speech)
    this.stomach = new Stomach(options?.stomach)
    this.waist = new Waist(options?.waist)

    this.pronouns = new Pronouns(this.sex.type)
  }
}
