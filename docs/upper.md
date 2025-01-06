# `.upper`

`class Upper`

## Description

Properties pertaining to the character's upper half.

## Usage

```js
import { Upper } from '@dsoloha/character-maker'

// create a blank instance:
const upper = new Upper()

// with parameters:
const upper = new Upper({ chest: { size: 'flat' } })

// generate a random instance:
const upper = new Upper().generate()
```

## Properties

| Property    | Type     | Description                                         | Optional |
|:------------|:---------|:----------------------------------------------------|:---------|
| `arm`       | `object` | Properties pertaining to the character's arms.      | Yes      |
| `chest`     | `object` | Properties pertaining to the character's chest.     | Yes      |
| `shoulders` | `object` | Properties pertaining to the character's shoulders. | Yes      |

### `.arm` *`object`*

See [Arm](./arm) for properties pertaining to the `Arm` class.

### `.chest` *`object`*

See [Chest](./chest) for properties pertaining to the `Chest` class.

### `.shoulders` *`object`*

See [Shoulders](./shoulders) for properties pertaining to the `Shoulders` class.
