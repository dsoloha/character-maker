export default class Neck implements INeck {
  larynx: boolean

  constructor(options?: { larynx?: boolean }) {
    this.larynx = options?.larynx ?? true
  }
}

export interface INeck {
  /** Whether or not the character has vocal cords. */
  larynx?: boolean
}
