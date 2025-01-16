import Physical, { IPhysical } from './Physical'
import Mental, { IMental } from './Mental'

/** The base character class. */
export default class Character implements ICharacter {
  id: number
  mental: IMental
  physical: IPhysical

  constructor(options?: ICharacter) {
    this.id = 0
    this.mental = new Mental()
    this.physical = new Physical()
  }

  //  TODO: add UUID generator
  generate(): ICharacter {
    return {
      id: 0,
      mental: new Mental(),
      physical: new Physical(),
    }
  }
}

export interface ICharacter {
  id: number
  mental: IMental
  physical: IPhysical
}
