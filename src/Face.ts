export default class Face implements IFace {
  attractiveness: number
  description: string

  constructor() {
    this.attractiveness = 50
    this.description = 'average'
  }
}

interface IFace {
  attractiveness: number
  description: string
}
