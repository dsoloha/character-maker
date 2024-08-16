# `.age`

`class Age`

## Description

Properties pertaining to the character's age.

## Usage

```js
import { Age } from '@dsoloha/character-maker'

// create a blank instance:
const age = new Age()

// with parameters:
const age = new Age({
  birth: {
    day: 1,
  }
})

// generate a random instance:
const age = new Age().generate()

// get the character's age in months
const age = new Age({ month: 6 })
console.log(age.monthsOld) // expected output: number between 1-12, depending on current month
  ```

## Properties

| Property | Type     | Description                                         | Optional |
|:---------|:---------|:----------------------------------------------------|:---------|
| `birth`  | `object` | Properties pertaining to the character's birthtime. | Yes      |

### `.birth` *`object`*

#### Description

Properties pertaining to the character's birthtime.

#### Properties

| Property | Type     | Description                                            | Optional |
|:---------|:---------|:-------------------------------------------------------|:---------|
| `day`    | `number` | On which day of the month the character was born.      | Yes      |
| `month`  | `number` | During which month of the year the character was born. | Yes      |
| `year`   | `number` | During what year the character was born.               | Yes      |

## Methods

### `.monthsOld` *`number`*

Returns the character's age, in months.
