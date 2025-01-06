export default class Ovaries implements IOvaries {
  fertile: boolean

  constructor() {
    this.fertile = true
  }
}

export interface IOvaries {
  /** Whether the ovaries are fertile. */
  fertile: boolean
}
