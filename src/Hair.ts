export default class Hair implements IHairs {
  head: IHair
  face: IHair
  underarms: IHair
  chest: IHair
  pubic: IHair
  arm: IHair
  leg: IHair

  constructor(options?: {
    head?: IHair
    face?: IHair
    underarms?: IHair
    chest?: IHair
    pubic?: IHair
    arm?: IHair
    leg?: IHair
  }) {
    const defaultHair: IHair = {
      color: '',
      length: '',
      style: '',
    }

    this.head = options?.head ?? Object.assign({}, defaultHair)
    this.face = options?.face ?? Object.assign({}, defaultHair)
    this.underarms = options?.underarms ?? Object.assign({}, defaultHair)
    this.chest = options?.chest ?? Object.assign({}, defaultHair)
    this.pubic = options?.pubic ?? Object.assign({}, defaultHair)
    this.arm = options?.arm ?? Object.assign({}, defaultHair)
    this.leg = options?.leg ?? Object.assign({}, defaultHair)
  }
}

export interface IHair {
  /** The color of the character's hair. */
  color: string
  /** The length of the character's hair. */
  length: string
  /** The style of the character's hair. */
  style: string
}

export interface IHairs {
  /** The hair on the character's head. */
  head?: IHair
  /** The hair on the character's face. */
  face?: IHair
  /** The hair on the character's underarms. */
  underarms?: IHair
  /** The hair on the character's chest. */
  chest?: IHair
  /** The hair on the character's pubic region. */
  pubic?: IHair
  /** The hair on the character's arms. */
  arm?: IHair
  /** The hair on the character's legs. */
  leg?: IHair
}
