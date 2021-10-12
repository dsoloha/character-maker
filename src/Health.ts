export default class Health implements IHealth {
  illnesses: string[]
  injuries: string[]

  constructor(options?: IHealth) {
    this.illnesses = options?.illnesses ?? []
    this.injuries = options?.injuries ?? []
  }
}

export interface IHealth {
  /** Any illnesses the character currently has. */
  illnesses: string[]
  /** Any injuries the character currently has. */
  injuries: string[]
}
