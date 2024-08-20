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
const character = new Character({ age: { birth: { year: 2000 } } })

// create a new fully-randomized character:
const character = new Character().generate()
```

## Structure

The base `Character` class follows a top-down structure, with more specific subclasses nested inside more generalized
subclasses. The full structure can be found [here.](./docs/structure.md)

## Reference

A full list of all available classes, properties, and methods can be
found [here.](https://dsoloha.github.io/character-maker/)
