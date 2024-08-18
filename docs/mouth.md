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
const mouth = new Mouth({ tongue: false })

// generate a random instance:
const mouth = new Mouth().generate()
```

## Properties

| Property | Type      | Description                                     | Optional |
|:---------|:----------|:------------------------------------------------|:---------|
| `teeth`  | `object`  | Properties pertaining to the character's teeth. | Yes      |
| `tongue` | `boolean` | Whether or not the character has a tongue.      | Yes      |

### `.teeth` *`object`*

#### Description

Properties pertaining to the character's teeth.

#### Properties

| Property      | Type     | Description                                  | Optional |
|:--------------|:---------|:---------------------------------------------|:---------|
| `count`       | `number` | How many teeth the character has, out of 32. | No       |
| `description` | `string` | A description of the character's teeth.      | No       |
