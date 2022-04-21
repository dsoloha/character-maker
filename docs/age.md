# `.age`

`class Age`

## Description

Properties pertaining to the character's age.

## Declaration

```js
import { Age } from '@dsoloha/character-maker'

const age = new Age()

// or optionally with parameters:

const age = new Age({
  birth: {
    day: 1,
  }
})
```

## Properties

| Property      | Type     | Description                                            | Optional |
| :------------ | :------- | :----------------------------------------------------- | :------- |
| `birth`       | `object` | Properties pertaining to the character's birthtime.    | Yes      |

### `.birth`

#### Description

Properties pertaining to the character's birthtime.

#### Properties

| Property | Type     | Description                                            | Optional |
| :------- | :------- | :----------------------------------------------------- | :------- |
| `day`    | `number` | On which day of the month the character was born.      | Yes      |
| `month`  | `number` | During which month of the year the character was born. | Yes      |
| `year`   | `number` | During what year the character was born.               | Yes      |
