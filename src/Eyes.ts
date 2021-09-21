export default class Eyes {
  /** The character's eye color. */
  color: string

  /** The character's eye colors if different. */
  colors: {
    /** The character's left eye color. */
    left: string
    /** The character's right eye color. */
    right: string
  }

  constructor(options?: {
    color?: string
    colors?: {
      left: string
      right: string
    }
  }) {
    this.color = options?.color ?? ''
    this.colors = options?.colors ?? {
      left: this.color,
      right: this.color,
    }
  }
}
