import Age, { IAge } from './Age'
import Sex, { ISex } from './Sex'
import Build, { IBuild } from './Build'
import Health, { IHealth } from './Health'
import Skin, { ISkin } from './Skin'
import Head, { IHead } from './Head'
import Upper, { IUpper } from './Upper'
import Lower, { ILower } from './Lower'

export default class Physical implements IPhysical {
  age: IAge
  sex: ISex
  build: IBuild
  health: IHealth
  skin: ISkin
  head: IHead
  upper: IUpper
  lower: ILower

  constructor() {
    this.age = new Age().generate()
    this.sex = new Sex().generate()
    this.build = new Build().generate()
    this.health = new Health().generate()
    this.skin = new Skin().generate()
    this.head = new Head()
    this.upper = new Upper()
    this.lower = new Lower()
  }
}

export interface IPhysical {
  /** Properties pertaining to the character's age. */
  age: IAge
  /** Properties pertaining to the character's sex. */
  sex: ISex
  /** Properties pertaining to the character's build. */
  build: IBuild
  /** Properties pertaining to the character's health. */
  health: IHealth
  /** Properties pertaining to the character's skin. */
  skin: ISkin
  /** Properties pertaining to the character's head. */
  head: IHead
  /** Properties pertaining to the character's upper half. */
  upper: IUpper
  /** Properties pertaining to the character's lower half. */
  lower: ILower
}
