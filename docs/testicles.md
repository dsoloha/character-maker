# `.testicles`

`class Testicles`

## Description

Properties pertaining to the character's testicles.

## Usage

```js
import { Testicles } from '@dsoloha/character-maker'

// create a blank instance:
const testicles = new Testicles()

// with parameters:
const testicles = new Testicles({ potent: false })

// generate a random instance:
const testicles = new Testicles().generate()
```

## Properties

| Property      | Type      | Description                                 | Optional |
|:--------------|:----------|:--------------------------------------------|:---------|
| `description` | `string`  | A description of the character's testicles. | Yes      |
| `potent`      | `boolean` | Whether the testicles are potent.           | Yes      |

