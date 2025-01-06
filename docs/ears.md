# `.ears`

`class Ears`

## Description

Properties pertaining to the character's ears.

## Usage

```js
import { Ears } from '@dsoloha/character-maker'

// create a blank instance:
const ears = new Ears()

// with parameters:
const ears = new Ears({ left: { hearing: 50 } })

// generate a random instance:
const ears = new Ears().generate()
```

## Properties

| Property | Type     | Description                                        | Optional |
|:---------|:---------|:---------------------------------------------------|:---------|
| `left`   | `object` | Properties pertaining to the character's left ear. | No       |
| `right`  | `object` | Properties pertaining to the character's left ear. | No       |

### `.left` *`object`*

#### Description

Properties pertaining to the character's left ear.

#### Properties

| Property      | Type     | Description                            | Optional |
|:--------------|:---------|:---------------------------------------|:---------|
| `hearing`     | `number` | How well the ear can hear, from 0-100. | Yes      |
| `description` | `string` | A description of the ear.              | Yes      |

### `.right` *`object`*

#### Description

Properties pertaining to the character's right ear.

#### Properties

| Property      | Type     | Description                            | Optional |
|:--------------|:---------|:---------------------------------------|:---------|
| `hearing`     | `number` | How well the ear can hear, from 0-100. | Yes      |
| `description` | `string` | A description of the ear.              | Yes      |


