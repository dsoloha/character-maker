import Character from '../src/index'

// an example character with every possible property listed

const average = 'average'
const testCharacter = new Character({
  id: 0,
  physical: {
    age: { birth: { day: 1, month: 1, year: 2000 } },
    sex: {
      type: 'male',
    },
    build: {
      height: 180,
      muscles: 50,
      type: average,
      weight: 65,
    },
    health: {
      illnesses: ['minor cold'],
      injuries: ['bullet wound'],
    },
    skin: {
      birthmarks: [],
      brands: [],
      color: 'tan',
      markings: [],
      piercings: [],
      scars: [],
      tattoos: [],
    },
    head: {
      ears: {
        left: {
          description: average,
          hearing: 100,
        },
        right: {
          description: average,
          hearing: 100,
        },
      },
      eyes: {
        left: {
          astigmatism: false,
          color: 'blue',
          description: average,
          farsighted: 0,
          nearsighted: 0,
        },
        right: {
          astigmatism: false,
          color: 'green',
          description: average,
          farsighted: 0,
          nearsighted: 0,
        },
      },
      face: {
        attractiveness: 100,
        description: average,
      },
      mouth: {
        teeth: {
          count: 32,
          description: 'straight',
        },
        tongue: {
          ageusia: false,
          description: average,
        },
        lips: {
          description: average,
        },
      },
      nose: {
        anosmia: false,
        description: average,
      },
      neck: {
        description: average,
        larynx: true,
      },
    },
    upper: {
      chest: {
        size: average,
      },
      shoulders: {
        width: average,
      },
      arm: {
        left: {
          size: average,
        },
        right: {
          size: average,
        },
      },
    },
    lower: {
      waist: {},
      leg: {
        left: {
          size: average,
        },
        right: {
          size: average,
        },
      },
    },
  },
  mental: {
    background: {},
    health: {},
    name: {},
    personality: {
      dislikes: [],
      fears: [],
      intelligence: 100,
      likes: [],
      type: 'ENFJ',
    },
    relations: {
      all: [],
      enemies: [],
      friends: [],
      family: {
        father: 0,
        mother: 0,
        siblings: [],
      },
      partners: {
        current: [],
        previous: [],
      },
    },
    sexuality: {},
    skills: {},
    speech: {},
  },
})

export default testCharacter
