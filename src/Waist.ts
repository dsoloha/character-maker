export default class Waist implements IWaist {
  size: string

  constructor(options?: { size?: string }) {
    this.size = options?.size ?? ''
  }
}

export interface IWaist {
  /** The size of the character's waist. */
  size?: string
}
