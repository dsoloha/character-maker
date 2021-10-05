export default class Nose {
  anosmia: boolean

  constructor(options?: { anosmia?: boolean }) {
    this.anosmia = options?.anosmia ?? false
  }
}
