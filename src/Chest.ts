export default class Chest implements IChest {
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}

export interface IChest {
  /** The size of the character's chest. */
  size?: string
}
