export type SexType = 'male' | 'female' | 'plural' | 'neuter'

export default class Sex implements ISex {
  type: SexType

  constructor(options?: { type: SexType }) {
    this.type = options?.type ?? 'male'
  }
}

export interface ISex {
  /** The biological sex of the character. */
  type: SexType
}
