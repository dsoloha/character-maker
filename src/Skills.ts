import { random } from '../lib/number'

export default class Skills implements ISkills {
  acrobatics: number
  art: number
  bartering: number
  blacksmithing: number
  carpentry: number
  cartography: number
  cooking: number
  combat: number
  diplomacy: number
  engineering: number
  farming: number
  firemaking: number
  fishing: number
  hacking: number
  herbalism: number
  hunting: number
  medicine: number
  mining: number
  research: number
  sailing: number
  stealth: number
  swimming: number

  constructor() {
    this.acrobatics = this.generateSkill()
    this.art = this.generateSkill()
    this.bartering = this.generateSkill()
    this.blacksmithing = this.generateSkill()
    this.carpentry = this.generateSkill()
    this.cartography = this.generateSkill()
    this.cooking = this.generateSkill()
    this.combat = this.generateSkill()
    this.diplomacy = this.generateSkill()
    this.engineering = this.generateSkill()
    this.farming = this.generateSkill()
    this.firemaking = this.generateSkill()
    this.fishing = this.generateSkill()
    this.hacking = this.generateSkill()
    this.herbalism = this.generateSkill()
    this.hunting = this.generateSkill()
    this.medicine = this.generateSkill()
    this.mining = this.generateSkill()
    this.research = this.generateSkill()
    this.sailing = this.generateSkill()
    this.stealth = this.generateSkill()
    this.swimming = this.generateSkill()
  }

  /** Generates a skill level. */
  private generateSkill(): number {
    return random(1, 100)
  }
}

export interface ISkills {
  /** How skilled the character is at acrobatics. */
  acrobatics: number
  /** How skilled the character is in art. */
  art: number
  /** How skilled the character is at bartering. */
  bartering: number
  /** How skilled the character is at blacksmithing. */
  blacksmithing: number
  /** How skilled the character is at carpentry. */
  carpentry: number
  /** How skilled the character is at cartography. */
  cartography: number
  /** How skilled the character is at cooking. */
  cooking: number
  /** How skilled the character is at combat. */
  combat: number
  /** How skilled the character is at diplomacy. */
  diplomacy: number
  /** How skilled the character is at engineering. */
  engineering: number
  /** How skilled the character is at farming. */
  farming: number
  /** How skilled the character is at firemaking. */
  firemaking: number
  /** How skilled the character is at fishing. */
  fishing: number
  /** How skilled the character is at hacking. */
  hacking: number
  /** How skilled the character is in herbalism. */
  herbalism: number
  /** How skilled the character is at hunting. */
  hunting: number
  /** How skilled the character is at medicine. */
  medicine: number
  /** How skilled the character is at mining. */
  mining: number
  /** How skilled the character is at researching. */
  research: number
  /** How skilled the character is at sailing. */
  sailing: number
  /** How skilled the character is at stealth. */
  stealth: number
  /** How skilled the character is at swimming. */
  swimming: number
}
