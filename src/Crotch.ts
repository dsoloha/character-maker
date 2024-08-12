import '../lib/array'
import { gaussian } from '../lib/number'

export default class Crotch implements ICrotch {
  anus: {
    description: string
  }
  ovaries: {
    fertile: boolean
  } | null
  penis: {
    size: string
  } | null
  testicles: {
    size: string
    potent?: boolean
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

  /** Generates a new anus. */
  private generateAnus(): IAnus {
    // TODO: add more descriptions
    const descriptions = ['unremarkable']
    const description = descriptions.random()

    return {
      description,
    }
  }

  /** Generates a new set of ovaries. */
  private generateOvaries(options?: { age: number }): IOvaries {
    let fertile: boolean

    if (options) {
      if (options.age > 45) fertile = gaussian(1, 100) > 65 ? true : false
      else if (options.age > 40) fertile = false
      else fertile = gaussian(1, 100) > 75 ? true : false
    } else {
      fertile = false
    }

    return {
      fertile,
    }
  }

  /** Generates a new penis. */
  private generatePenis(): IPenis {
    const sizes = ['small', 'average', 'large', 'huge']
    const size = sizes.random()

    return {
      size,
    }
  }

  /** Generates new testicles. */
  private generateTesticles(): ITesticles {
    const sizes = ['small', 'average', 'large', 'huge']
    const size = sizes.random()
    let potent = true

    if (gaussian(0, 100) > 80) potent = false

    return {
      size,
      potent,
    }
  }

  /** Generates a new vagina. */
  private generateVagina(): IVagina {
    const descriptions = ['unremarkable']
    const description = descriptions.random()

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
  /** Whether or not the character is sexually fertile. */
  fertile: boolean
}

export interface IPenis {
  /** The size of the character's penis. */
  size: string
}

export interface ITesticles {
  /** The size of the character's testicles. */
  size: string
  /** Whether or not the character is sexually potent. */
  potent?: boolean
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
