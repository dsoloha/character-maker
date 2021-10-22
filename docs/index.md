# character-maker

This is a relatively simple JavaScript library designed to make creating new characters for your next project easier than ever.

## Getting Started

Install the package:

```sh
npm install character-maker
```

Import the module and create a new character:

```js
import { Character } from 'character-maker'

// create a new blank character:
const character = new Character()

// create a new character with given parameters:
const character = new Character({
  name: {
    first: 'John',
    last: 'Smith',
  }
})

// create a new fully-randomized character:
const character = new Character().generate()
```

## API Reference

Here are all properties available on a given instance of the `Character` class:

- [`.age`](./age)
- [`.arms`](./arms)
- [`.background`](./background)
- [`.build`](./build)
- [`.chest`](./chest)
- [`.crotch`](./crotch)
- [`.eyes`](./eyes)
- [`.hair`](./hair)
- [`.health`](./health)
- [`.legs`](./legs)
- [`.mouth`](./mouth)
- [`.name`](./name)
- [`.neck`](./neck)
- [`.nose`](./nose)
- [`.pronouns`](./pronouns)
- [`.sex`](./sex)
- [`.sexuality`](./sexuality)
- [`.shoulders`](./shoulders)
- [`.skin`](./skin)
- [`.speech`](./speech)
- [`.stomach`](./stomach)
- [`.waist`](./waist)
