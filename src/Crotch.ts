export default class Crotch {
  ovaries: {
    /** Whether or not the character has gone through menopause. */
    menopause: boolean
  } | null
  /** Properties pertaining to the character's penis, if any. */
  penis: {
    /** The size of the character's penis. */
    size: string
  } | null
  /** Properties pertaining to the character's testicles, if any. */
  testicles: {
    /** The size of the character's testicles. */
    size: string
    /** Whether or not the character has had a vasectomy. */
    vasectomy: boolean
  } | null
  /** Properties pertaining to the character's vagina, if any. */
  vagina: {
    /** A description of the character's Vagina. */
    description: string
  } | null
  /** Properties pertaining to the character's ovaries, if any. */

  constructor(options?: {
    ovaries?: {
      menopause: boolean
    } | null
    penis?: {
      size: string
    } | null
    testicles?: {
      size: string
      vasectomy: boolean
    } | null
    vagina?: {
      description: string
    } | null
  }) {
    this.ovaries = options?.ovaries ?? null
    this.penis = options?.penis ?? null
    this.testicles = options?.testicles ?? null
    this.vagina = options?.vagina ?? null
  }
}
