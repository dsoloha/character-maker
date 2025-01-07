# `.character`

`class Character`

## Description

All properties available on a given instance of `Character`.

## Usage

```js
import { Character } from '@dsoloha/character-maker'

// create a blank instance:
const character = new Character()

// with parameters:
const character = new Character({
  physical: { age: { birth: { day: 1 } } }
})

// generate a random instance:
const character = new Character().generate()
```

## Properties

| Property   | Type     | Description                                    | Optional |
|:-----------|:---------|:-----------------------------------------------|:---------|
| `id`       | `number` | The character's unique ID.                     | Yes      |
| `physical` | `object` | Properties pertaining to the character's age.  | Yes      |
| `mental`   | `object` | Properties pertaining to the character's arms. | Yes      |

### `.physical` *`object`*

See [`Physical`](./physical.md) for properties pertaining to the `Physical` class.

### `.mental` *`object`*

See [`Mental`](./mental.md) for properties pertaining to the `Mental` class.
