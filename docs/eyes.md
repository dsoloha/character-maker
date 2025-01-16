# `.eyes`

`class Eyes`

## Description

Properties pertaining to the character's eyes.

## Usage

```js
import { Eyes } from '@dsoloha/character-maker'

// create a blank instance:
const eyes = new Eyes()

// with parameters:
const eyes = new Eyes({ left: { color: 'blue' } })

// generate a random instance:
const eyes = new Eyes().generate()
```

## Properties

| Property | Type     | Description                                        | Optional |
|:---------|:---------|:---------------------------------------------------|:---------|
| `left`   | `object` | Properties pertaining to the character's left eye. | No       |
| `right`  | `object` | Properties pertaining to the character's left eye. | No       |

### `.left` *`object`*

#### Description

Properties pertaining to the character's left eye.

#### Properties

| Property      | Type     | Description                                  | Optional |
|:--------------|:---------|:---------------------------------------------|:---------|
| `astigmatism` | `number` | The degree to which the eye has astigmatism. | Yes      |
| `color`       | `object` | The color of the eye.                        | Yes      |
| `farsighted`  | `number` | How farsighted the eye is, from 0-100.       | Yes      |
| `nearsighted` | `number` | How nearsighted the eye is, from 0-100.      | Yes      |

### `.right` *`object`*

#### Description

Properties pertaining to the character's right eye.

#### Properties

| Property      | Type     | Description                                  | Optional |
|:--------------|:---------|:---------------------------------------------|:---------|
| `astigmatism` | `number` | The degree to which the eye has astigmatism. | Yes      |
| `color`       | `object` | The color of the eye.                        | Yes      |
| `description` | `string` | A description of the eye.                    | Yes      |
| `farsighted`  | `number` | How farsighted the eye is, from 0-100.       | Yes      |
| `nearsighted` | `number` | How nearsighted the eye is, from 0-100.      | Yes      |


