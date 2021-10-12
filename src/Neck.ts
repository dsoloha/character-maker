export default class Neck implements INeck {
  larynx: boolean

  constructor(options?: INeck) {
    this.larynx = options?.larynx ?? true
  }
}

export interface INeck {
  /** Whether or not the character has vocal cords. */
  larynx?: boolean
}
