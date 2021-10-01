export default class Eyes {
  /** Whether the character has astigmatism. */
  astigmatism: boolean
  /** The character's eye color. */
  color: string
  /** The character's eye colors if different. */
  colors: {
    /** The character's left eye color. */
    left: string
    /** The character's right eye color. */
    right: string
  }
  /** Whether the character is farsighted. */
  farsighted: boolean
  /** Whether the character is nearsighted. */
  nearsighted: boolean

  constructor(options?: {
    astigmatism?: boolean
    color?: string
    colors?: {
      left: string
      right: string
    }
    farsighted?: boolean
    nearsighted?: boolean
  }) {
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
