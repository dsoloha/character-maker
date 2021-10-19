# `.mouth`

`class Mouth`

## Description

Properties pertaining to the character's mouth.

## Declaration

```js
import { Mouth } from 'character-maker'

const mouth = new Mouth()

// or optionally with parameters:

const mouth = new Mouth({
  tongue: false,
})
```

## Properties

| Property | Type      | Description                                     | Optional |
| :------- | :-------- | :---------------------------------------------- | :------- |
| `teeth`  | `object`  | Properties pertaining to the character's teeth. | Yes      |
| `tongue` | `boolean` | Whether or not the character has a tongue.      | Yes      |

### `.teeth`

#### Description

Properties pertaining to the character's teeth.

#### Properties

| Property      | Type     | Description                                  | Optional |
| :------------ | :------- | :------------------------------------------- | :------- |
| `count`       | `number` | How many teeth the character has, out of 32. | No       |
| `description` | `string` | A description of the character's teeth.      | No       |
