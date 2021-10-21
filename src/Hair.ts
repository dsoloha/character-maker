import '../lib/array'
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

  generateColor(): string {
    const colors = ['brown', 'blond', 'red']

    return colors.random()
  }

  generateLength(): string {
    const lengths = ['short', 'medium', 'long']

    return lengths.random()
  }

  generateStyle(): string {
    const styles = ['neat', 'curly', 'straight']

    return styles.random()
  }

  generateHead(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generateFace(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generateUnderarms(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generateChest(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generatePubic(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generateArm(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generateLeg(options?: {
    color?: string
    length?: string
    style?: string
  }): IHair {
    const color = options?.color ?? this.generateColor()
    const length = options?.length ?? this.generateLength()
    const style = options?.style ?? this.generateStyle()

    return {
      color,
      length,
      style,
    }
  }

  generate(options?: {
    color?: string
    length?: string
    style?: string
  }): IHairs {
    return {
      head: this.generateHead(options),
      face: this.generateFace(options),
      underarms: this.generateUnderarms(options),
      chest: this.generateChest(options),
      pubic: this.generatePubic(options),
      arm: this.generateArm(options),
      leg: this.generateLeg(options),
    }
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
