import '../lib/array'

export default class Speech implements ISpeech {
  style: string

  constructor(options?: ISpeech) {
    this.style = options?.style ?? ''
  }

  generateStyle(): string {
    const styles = ['posh', 'crass', 'average']
    const style = styles.random()

    return style
  }

  generate(): ISpeech {
    return {
      style: this.generateStyle(),
    }
  }
}

export interface ISpeech {
  /** The character's style of speaking. */
  style?: string
}
