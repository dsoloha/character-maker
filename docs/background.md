# `.background`

*`class Background`*

## Description

Properties pertaining to the character's background and upbringing.

## Usage

```js
import { Background } from '@dsoloha/character-maker'

// create a blank instance:
const background = new Background()

// with parameters:
const background = new Background({
  birthplace: 'Kyiv',
})

// generate a random instance:
const background = new Background().generate()

// get the character's nationality:
const background = new Background({ birthplace: { city: 'Kyiv' } })
console.log(background.nationality) // expected output: 'Ukrainian'
```

## Properties

| Property     | Type     | Description                                          | Optional |
|:-------------|:---------|:-----------------------------------------------------|:---------|
| `birthplace` | `object` | The character's birthplace.                          | No       |
| `education`  | `object` | Properties pertaining to the character's education.  | No       |
| `occupation` | `object` | Properties pertaining to the character's occupation. | No       |

### `.birthplace` *`object`*

#### Description

Properties pertaining to where the character was born.

#### Properties

| Property  | Type     | Description              | Optional |
|:----------|:---------|:-------------------------|:---------|
| `city`    | `string` | The name of the city.    | Yes      |
| `country` | `string` | The name of the country. | No       |

### `.education` *`object`*

#### Description

Properties pertaining to the character's education, if any.

#### Properties

| Property | Type     | Description                                                    | Optional |
|:---------|:---------|:---------------------------------------------------------------|:---------|
| `grade`  | `number` | The character's grade-point average at graduation, out of 100. | No       |
| `length` | `number` | How many years the character attended the school.              | No       |
| `school` | `string` | The school the character went to.                              | No       |

### `.occupation` *`object`*

#### Description

Properties pertaining to the character's occupation.

#### Properties

| Property | Type     | Description                                            | Optional |
|:---------|:---------|:-------------------------------------------------------|:---------|
| `type`   | `string` | The character's current occupation.                    | No       |
| `income` | `number` | The character's weekly income in the local currency.   | No       |
| `length` | `number` | How many months the character has had this occupation. | No       |

## Methods

### `.nationality` *`string`*

Returns the character's nationality.
