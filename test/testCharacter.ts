import { Character } from '../src/index'

// an example character with every possible property listed

const testCharacter = new Character({
  age: { birth: { day: 1, month: 1, year: 2000 } },
  arms: {
    left: { hand: { fingers: 5 }, size: 35 },
    right: { hand: { fingers: 5 }, size: 35 },
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
      size: 20,
    },
    testicles: {
      size: 20,
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
})

export default testCharacter
