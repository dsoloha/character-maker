import { Character } from '../src/index'

// an example character with every possible property listed

const testCharacter = new Character({
  age: { birth: { day: 1, month: 1, year: 2000 } },
  arms: {
    left: { hand: { fingers: 5 }, size: 'large' },
    right: { hand: { fingers: 5 }, size: 'large' },
  },
  background: {
    birthplace: { city: 'Kyiv', country: 'Ukraine' },
    education: {
      schools: [
        { name: 'elementary school', grade: 100, length: 4 },
        { name: 'middle school', grade: 100, length: 4 },
        { name: 'high school', grade: 100, length: 4 },
      ],
      highestLevel: 'ged',
    },
  },
  build: {
    height: 180,
    muscles: 50,
    type: 'average',
    weight: 65,
  },
  chest: {
    size: 'flat',
  },
  crotch: {
    anus: {
      description: 'unremarkable',
    },
    ovaries: {
      fertile: false,
    },
    penis: {
      size: 'average',
    },
    testicles: {
      size: 'average',
      potent: true,
    },
    vagina: {
      description: 'unremarkable',
    },
  },
  eyes: {
    astigmatism: false,
    colors: {
      left: 'blue',
      right: 'green',
    },
    farsighted: false,
    nearsighted: false,
  },
  health: {
    illnesses: ['minor cold'],
    injuries: ['bullet wound'],
  },
  hair: {
    arm: {
      color: 'black',
      length: 'short',
      style: 'straight',
    },
    chest: {
      color: 'black',
      length: 'short',
      style: 'straight',
    },
    face: {
      color: 'black',
      length: 'short',
      style: 'stubble',
    },
    head: {
      color: 'brown',
      length: 'short',
      style: 'straight',
    },
    leg: {
      color: 'brown',
      length: 'short',
      style: 'straight',
    },
    pubic: {
      color: 'black',
      length: 'short',
      style: 'curly',
    },
    underarms: {
      color: 'brown',
      length: 'short',
      style: 'straight',
    },
  },
  legs: {
    left: { foot: { toes: 5 }, size: 'average' },
    right: { foot: { toes: 5 }, size: 'average' },
  },
  mouth: {
    teeth: {
      count: 32,
      description: 'white',
    },
    tongue: true,
  },
  name: {
    first: 'Slava',
    middle: 'Heroyim',
    last: 'Ukraini',
  },
  neck: {
    larynx: true,
  },
  nose: {
    anosmia: false,
  },
  sex: {
    type: 'male',
  },
  sexuality: {
    gender: 'male',
    attraction: {
      male: 0,
      female: 0,
    },
  },
  shoulders: {
    width: 'broad',
  },
  skin: {
    color: 'tan',
    scars: [],
  },
  speech: {
    style: 'normal',
  },
  stomach: {
    shape: 'flat',
  },
  waist: {
    size: 'average',
  },
})

export default testCharacter
