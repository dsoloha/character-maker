# `.vagina`

`class Vagina`

## Description

Properties pertaining to the character's vagina.

## Usage

```js
import { Vagina } from '@dsoloha/character-maker'

// create a blank instance:
const vagina = new Vagina()

// with parameters:
const vagina = new Vagina({ description: 'average' })

// generate a random instance:
const vagina = new Vagina().generate()
```

## Properties

| Property      | Type     | Description                                       | Optional |
|:--------------|:---------|:--------------------------------------------------|:---------|
| `clitoris`    | `string` | How large the character's clitoris is.            | Yes      |
| `description` | `string` | A description of the character's vagina.          | Yes      |
| `labia`       | `string` | A description of the character's labia.           | Yes      |
| `ovaries`     | `object` | Properties pertaining to the character's ovaries. | Yes      |

### `.ovaries` *`object`*

See [`Ovaries`](./ovaries) for properties pertaining to the `Ovaries` class.
