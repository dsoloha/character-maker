# `.sexuality`

`class Sexuality`

## Description

Properties pertaining to the character's sexuality.

## Declaration

```js
import { Sexuality } from '@dsoloha/character-maker'

const sexuality = new Sexuality()

// or optionally with parameters:

const sexuality = new Sexuality({
  gender: 'male',
})
```

## Properties

| Property     | Type     | Description                                                             | Optional |
| :----------- | :------- | :---------------------------------------------------------------------- | :------- |
| `gender`     | `string` | The character's self-perceived gender.                                  | Yes      |
| `attraction` | `object` | Properties pertaining to the character's attraction to different sexes. | Yes      |

### `.attraction`

#### Description

Properties pertaining to the character's attraction to different sexes.

#### Properties

| Property | Type     | Description                                                       | Optional |
| :------- | :------- | :---------------------------------------------------------------- | :------- |
| `male`   | `number` | How attracted the character is to males, on a scale of 0 - 100.   | Yes      |
| `female` | `number` | How attracted the character is to females, on a scale of 0 - 100. | Yes      |
