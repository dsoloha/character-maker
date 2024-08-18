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

The `Character` class follows a top-down structure, with more specific subclasses nested inside more generalized
subclasses. For example, a `Toe`class would be found in the `Foot` class, which itself would be found in the `Leg`
class, and so on. The full structure is as follows:

```
Character
\_ Physical
  \_ Sex
  \_ Build
  \_ Head
    \_ Eyes
    \_ Mouth
      \_ Teeth
      \_ Tongue
    \_ Nose
    \_ Neck
  \_ Upper
    \_ Chest
    \_ Shoulders
    \_ Arm
      \_ Hand
  \_ Lower
    \_ Crotch
      \_ Butt
        \_ Anus
      \_ Vagina
        \_ Ovaries
      \_ Penis
        \_ Testicles
    \_ Leg
      \_ Foot
\_ Mental
  \_ Background
  \_ Speech
  \_ Personality
  \_ Sexuality
  \_ Relations
  \_ Skills 
```

## API Reference

Here are all properties available on a given instance of the `Character` class:

- [`.age`](./docs/age.md)
- [`.arms`](./docs/arms.md)
- [`.background`](./docs/background.md)
- [`.build`](./docs/build.md)
- [`.chest`](./docs/chest.md)
- [`.crotch`](./docs/crotch.md)
- [`.eyes`](./docs/eyes.md)
- [`.hair`](./docs/hair.md)
- [`.health`](./docs/health.md)
- [`.legs`](./docs/legs.md)
- [`.mouth`](./docs/mouth.md)
- [`.name`](./docs/name.md)
- [`.neck`](./docs/neck.md)
- [`.nose`](./docs/nose.md)
- [`.pronouns`](./docs/pronouns.md)
- [`.sex`](./docs/sex.md)
- [`.sexuality`](./docs/sexuality.md)
- [`.shoulders`](./docs/shoulders.md)
- [`.skin`](./docs/skin.md)
- [`.speech`](./docs/speech.md)
- [`.stomach`](./docs/stomach.md)
- [`.waist`](./docs/waist.md)

View all sub-properties and more documentation [here](https://dsoloha.github.io/character-maker/).
