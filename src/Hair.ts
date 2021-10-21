export default class Hair implements IHairs {
  head: IHair
  face: IHair
  underarms: IHair
  chest: IHair
  pubic: IHair
  arm: IHair
  leg: IHair

  constructor(options?: IHairs) {
    const defaultHair: IHair = Object.assign(
      {},
      {
        color: '',
        length: '',
        style: '',
      }
    )

    this.head = options?.head ?? defaultHair
    this.face = options?.face ?? defaultHair
    this.underarms = options?.underarms ?? defaultHair
    this.chest = options?.chest ?? defaultHair
    this.pubic = options?.pubic ?? defaultHair
    this.arm = options?.arm ?? defaultHair
    this.leg = options?.leg ?? defaultHair
  }
}

export interface IHair {
  /** The color of the hair. */
  color: string
  /** The length of the hair. */
  length: string
  /** The style of the hair. */
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
