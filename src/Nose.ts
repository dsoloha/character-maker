export default class Nose {
  /** Whether or not the character has a sense of smell. */
  anosmia: boolean

  constructor(options?: { anosmia?: boolean }) {
    this.anosmia = options?.anosmia ?? false
  }
}
