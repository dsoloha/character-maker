import Chest, { IChest } from './Chest'
import Shoulders, { IShoulders } from './Shoulders'
import Arms, { IArms } from './Arms'

export default class Upper implements IUpper {
  chest: IChest
  shoulders: IShoulders
  arm: IArms

  constructor() {
    this.chest = new Chest().generate()
    this.shoulders = new Shoulders().generate()
    this.arm = new Arms().generate()
  }
}

export interface IUpper {
  chest: IChest
  shoulders: IShoulders
  arm: IArms
}
