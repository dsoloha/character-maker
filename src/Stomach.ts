export default class Stomach implements IStomach {
  shape: string

  constructor(options?: { shape?: string }) {
    this.shape = options?.shape ?? ''
  }
}

export interface IStomach {
  /** The shape of the character's stomach. */
  shape: string
}
