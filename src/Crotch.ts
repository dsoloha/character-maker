import { random } from '../lib/array'
import { gaussian } from '../lib/number'

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

  generateAnus(): IAnus {
    // TODO: add more descriptions
    const descriptions = ['unremarkable']
    const description = random(descriptions)

    return {
      description,
    }
  }

  // TODO: incorporate age
  generateOvaries(options?: { age: number }): IOvaries {
    let menopause: boolean

    if (options) {
      if (options.age > 45) menopause = gaussian(1, 100) > 65 ? true : false
      else if (options.age < 40) menopause = false
      else menopause = gaussian(1, 100) > 75 ? true : false
    } else {
      menopause = false
    }

    return {
      menopause,
    }
  }

  generatePenis(): IPenis {
    const sizes = ['small', 'average', 'large', 'huge']
    const size = random(sizes)

    return {
      size,
    }
  }

  generateTesticles(): ITesticles {
    const sizes = ['small', 'average', 'large', 'huge']
    const size = random(sizes)
    const vasectomy = gaussian(1, 100) > 75 ? true : false

    return {
      size,
      vasectomy,
    }
  }

  generateVagina(): IVagina {
    const descriptions = ['unremarkable']
    const description = random(descriptions)

    return {
      description,
    }
  }

  generate(): ICrotch {
    return {
      anus: this.generateAnus(),
      ovaries: this.generateOvaries(),
      penis: this.generatePenis(),
      testicles: this.generateTesticles(),
      vagina: this.generateVagina(),
    }
  }
}

export interface IAnus {
  /** A description of the character's anus. */
  description: string
}

export interface IOvaries {
  /** Whether or not the character has gone through menopause. */
  menopause: boolean
}

export interface IPenis {
  /** The size of the character's penis. */
  size: string
}

export interface ITesticles {
  /** The size of the character's testicles. */
  size: string
  /** Whether or not the character has had a vasectomy. */
  vasectomy: boolean
}

export interface IVagina {
  /** A description of the character's vagina. */
  description: string
}

export interface ICrotch {
  /** Properties pertaining to the character's anus. */
  anus?: IAnus
  /** Properties pertaining to the character's ovaries, if any. */
  ovaries?: IOvaries | null
  /** Properties pertaining to the character's penis, if any. */
  penis?: IPenis | null
  /** Properties pertaining to the character's testicles, if any. */
  testicles?: ITesticles | null
  /** Properties pertaining to the character's vagina, if any. */
  vagina?: IVagina | null
}
