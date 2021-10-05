export default class Neck {
  /** Whether or not the character has vocal cords. */
  larynx: boolean

  constructor(options?: { larynx?: boolean }) {
    this.larynx = options?.larynx ?? true
  }
}
