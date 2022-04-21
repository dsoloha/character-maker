# `.eyes`

`class Eyes`

## Description

Properties pertaining to the character's eyes.

## Declaration

```js
import { Eyes } from '@dsoloha/character-maker'

const eyes = new Eyes()

// or optionally with parameters:

const eyes = new Eyes({
  astigmatism: true,
})
```

## Properties

| Property      | Type      | Description                              | Optional |
| :------------ | :-------- | :--------------------------------------- | :------- |
| `astigmatism` | `boolean` | Whether the character has astigmatism.   | Yes      |
| `color`       | `string`  | The character's eye color.               | Yes      |
| `colors`      | `object`  | The character's eye colors if different. | Yes      |
| `farsighted`  | `boolean` | Whether the character is farsighted.     | Yes      |
| `nearsighted` | `boolean` | Whether the character is nearsighted.    | Yes      |

### `.colors`

#### Description

The character's eye colors if different.

#### Properties

| Property | Type     | Description                      | Optional |
| :------- | :------- | :------------------------------- | :------- |
| `left`   | `string` | The character's left eye color.  | No       |
| `right`  | `string` | The character's right eye color. | No       |
