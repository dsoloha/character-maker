export default class Eyes implements IEyes {
  astigmatism: boolean
  color: string
  colors: {
    left: string
    right: string
  }
  farsighted: boolean
  nearsighted: boolean

  constructor(options?: IEyes) {
    this.astigmatism = options?.astigmatism ?? false
    this.color = options?.color ?? ''
    this.colors = options?.colors ?? {
      left: this.color,
      right: this.color,
    }
    this.farsighted = options?.farsighted ?? false
    this.nearsighted = options?.nearsighted ?? false
  }
}

export interface IEyes {
  /** Whether the character has astigmatism. */
  astigmatism?: boolean
  /** The character's eye color. */
  color?: string
  /** The character's eye colors if different. */
  colors?: {
    /** The character's left eye color. */
    left: string
    /** The character's right eye color. */
    right: string
  }
  /** Whether the character is farsighted. */
  farsighted?: boolean
  /** Whether the character is nearsighted. */
  nearsighted?: boolean
}
