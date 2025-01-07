import { gaussian } from '../lib/number'

export default class Personality implements IPersonality {
  dislikes: string[]
  fears: string[]
  intelligence: number
  likes: string[]
  type: string

  constructor() {
    this.dislikes = []
    this.fears = []
    this.intelligence = this.generateIntelligence()
    this.likes = []
    this.type = this.generateType()
  }

  /** Generates a random IQ. */
  private generateIntelligence(): number {
    return gaussian(1, 200, 1.01)
  }

  /** Generates a personality type. */
  private generateType(): string {
    const EN = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP']
    const ES = ['ESFJ', 'ESFP', 'ESTJ', 'ESTP']
    const IN = ['INFJ', 'INFP', 'INTJ', 'INTP']
    const IS = ['ISFJ', 'ISFP', 'ISTJ', 'ISTP']
    const types = [...EN, ...ES, ...IN, ...IS]

    return types.random()
  }

  generate(): IPersonality {
    return {
      dislikes: [],
      fears: [],
      intelligence: this.generateIntelligence(),
      likes: [],
      type: this.generateType(),
    }
  }
}

export interface IPersonality {
  dislikes: string[]
  fears: string[]
  intelligence: number
  likes: string[]
  type: string
}
