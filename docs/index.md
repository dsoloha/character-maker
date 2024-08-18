# character-maker

This is a relatively simple JavaScript library designed to make creating realistic characters for your next project
easier
than ever.

## Getting Started

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

View the full `Character` documentation [here](./character).
