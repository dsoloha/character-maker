# `.mouth`

`class Mouth`

## Description

Properties pertaining to the character's mouth.

## Usage

```js
import { Mouth } from '@dsoloha/character-maker'

// create a blank instance:
const mouth = new Mouth()

// with parameters:
const mouth = new Mouth({ teeth: { count: 30 } })

// generate a random instance:
const mouth = new Mouth().generate()
```

## Properties

| Property | Type      | Description                                      | Optional |
|:---------|:----------|:-------------------------------------------------|:---------|
| `teeth`  | `object`  | Properties pertaining to the character's teeth.  | Yes      |
| `tongue` | `boolean` | Properties pertaining to the character's tongue. | Yes      |
| `lips`   | `object`  | Properties pertaining to the character's lips.   |

### `.teeth` *`object`*

See [`Teeth`](./teeth.md) for properties pertaining to the `Teeth` class.

### `.tongue` *`object`*

See [`Tongue`](./tongue.md) for properties pertaining to the `Tongue` class.

### `.lips` *`object`*

See [`Lips`](./lips.md) for properties pertaining to the `Lips` class.
