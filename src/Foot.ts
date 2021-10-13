export default class Foot implements IFoot {
  toes: number

  constructor(options?: IFoot) {
    this.toes = options?.toes ?? 5
  }
}

export interface IFoot {
  /** How many toes the foot has. */
  toes?: number
}
