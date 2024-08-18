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
const eyes = new Eyes({ astigmatism: true })

// generate a random instance:
const eyes = new Eyes().generate()
```

## Properties

| Property      | Type      | Description                              | Optional |
|:--------------|:----------|:-----------------------------------------|:---------|
| `astigmatism` | `boolean` | Whether the character has astigmatism.   | Yes      |
| `colors`      | `object`  | The character's eye colors if different. | Yes      |
| `farsighted`  | `boolean` | Whether the character is farsighted.     | Yes      |
| `nearsighted` | `boolean` | Whether the character is nearsighted.    | Yes      |

### `.colors` *`object`*

#### Description

The character's eye colors if different.

#### Properties

| Property | Type     | Description                      | Optional |
|:---------|:---------|:---------------------------------|:---------|
| `left`   | `string` | The character's left eye color.  | No       |
| `right`  | `string` | The character's right eye color. | No       |
