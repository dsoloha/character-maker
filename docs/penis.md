# `.penis`

`class Penis`

## Description

Properties pertaining to the character's penis.

## Usage

```js
import { penis } from '@dsoloha/character-maker'

// create a blank instance:
const penis = new Penis()

// with parameters:
const penis = new Penis({ length: 10 })

// generate a random instance:
const penis = new Penis().generate()
```

## Properties

| Property      | Type      | Description                                         | Optional |
|:--------------|:----------|:----------------------------------------------------|:---------|
| `description` | `string`  | A description of the character's penis.             | Yes      |
| `girth`       | `number`  | How thick the character's penis is, in cm.          | Yes      |
| `length`      | `number`  | How long the character's penis is, in cm.           | Yes      |
| `foreskin`    | `boolean` | Whether the character's foreskin is intact.         | Yes      |
| `testicles`   | `object`  | Properties pertaining to the character's testicles. | Yes      |

### `.testicles` *`object`*

See [Testicles](./testicles) for properties pertaining to the `Testicles` class.
