export default class Nose implements INose {
  anosmia: boolean

  constructor(options?: { anosmia?: boolean }) {
    this.anosmia = options?.anosmia ?? false
  }
}

export interface INose {
  /** Whether or not the character has a sense of smell. */
  anosmia?: boolean
}
