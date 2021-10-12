export default class Nose implements INose {
  anosmia: boolean

  constructor(options?: INose) {
    this.anosmia = options?.anosmia ?? false
  }
}

export interface INose {
  /** Whether or not the character has a sense of smell. */
  anosmia?: boolean
}
