# character-maker

⚠️ This project is still early in development, and will undergo many changes in the future. Use at your own risk! ⚠️

This package aims to help you create new characters for your next novel, story, game, TV show, etc.

[![Issues](https://img.shields.io/github/issues/dsoloha/character-maker)](https://github.com/dsoloha/character-maker/issues)
[![Stars](https://img.shields.io/github/stars/dsoloha/character-maker)](https://github.com/dsoloha/character-maker/stargazers)
[![ISC License](https://img.shields.io/github/license/dsoloha/character-maker)](https://opensource.org/licenses/ISC)

## Usage

Install the package:

```sh
npm install @dsoloha/character-maker
```

Import the module and create a new character:

```js
import { Character } from '@dsoloha/character-maker'

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

All parameters available can be found [here](https://dsoloha.github.io/character-maker/).

## API Reference

All parameters listed here are optional.

The following properties are available on an instance of the `Character` class:

- `.age`
- `.arms`
- `.background`
- `.build`
- `.chest`
- `.crotch`
- `.eyes`
- `.hair`
- `.health`
- `.height`
- `.legs`
- `.mouth`
- `.muscles`
- `.name`
- `.neck`
- `.nose`
- `.pronouns`
- `.sex`
- `.sexuality`
- `.shoulders`
- `.skin`
- `.speech`
- `.stomach`
- `.waist`
- `.weight`

View all sub-properties and more documentation [here](https://dsoloha.github.io/character-maker/).

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.
