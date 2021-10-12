export default class Crotch implements ICrotch {
  anus: {
    description: string
  }
  ovaries: {
    menopause: boolean
  } | null
  penis: {
    size: string
  } | null
  testicles: {
    size: string
    vasectomy: boolean
  } | null
  vagina: {
    description: string
  } | null

  constructor(options?: ICrotch) {
    this.anus = options?.anus ?? {
      description: options?.anus?.description ?? '',
    }
    this.ovaries = options?.ovaries ?? null
    this.penis = options?.penis ?? null
    this.testicles = options?.testicles ?? null
    this.vagina = options?.vagina ?? null
  }
}

export interface ICrotch {
  /** Properties pertaining to the character's anus. */
  anus?: {
    /** A description of the character's anus. */
    description: string
  }
  /** Properties pertaining to the character's ovaries, if any. */
  ovaries?: {
    /** Whether or not the character has gone through menopause. */
    menopause: boolean
  } | null
  /** Properties pertaining to the character's penis, if any. */
  penis?: {
    /** The size of the character's penis. */
    size: string
  } | null
  /** Properties pertaining to the character's testicles, if any. */
  testicles?: {
    /** The size of the character's testicles. */
    size: string
    /** Whether or not the character has had a vasectomy. */
    vasectomy: boolean
  } | null
  /** Properties pertaining to the character's vagina, if any. */
  vagina?: {
    /** A description of the character's vagina. */
    description: string
  } | null
}
