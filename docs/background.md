# `.background`

`class Background`

## Description

Properties pertaining to the character's background and upbringing.

## Declaration

```js
import { Background } from '@dsoloha/character-maker'

const background = new Background()

// or optionally with parameters:

const background = new Background({
  birthplace: 'Kyiv',
})
```

## Properties

| Property      | Type               | Description                                          | Optional |
|:--------------|:-------------------|:-----------------------------------------------------|:---------|
| `birthplace`  | `string`           | The character's birthplace.                          | Yes      |
| `education`   | `object` or `null` | Properties pertaining to the character's education.  | Yes      |
| `nationality` | `string`           | The character's nationality.                         | Yes      |
| `occupation`  | `object`           | Properties pertaining to the character's occupation. | Yes      |

### `.education`

#### Description

Properties pertaining to the character's education.

#### Properties

| Property | Type     | Description                                                    | Optional |
|:---------|:---------|:---------------------------------------------------------------|:---------|
| `grade`  | `number` | The character's grade-point average at graduation, out of 100. | Yes      |
| `length` | `number` | How many years the character attended the school.              | Yes      |
| `school` | `string` | The school the character went to.                              | Yes      |

### `.occupation`

#### Description

Properties pertaining to the character's occupation.

#### Properties

| Property | Type     | Description                                            | Optional |
|:---------|:---------|:-------------------------------------------------------|:---------|
| `type`   | `string` | The character's current occupation.                    | Yes      |
| `income` | `number` | The character's annual income in the local currency.   | Yes      |
| `length` | `number` | How many months the character has had this occupation. | Yes      |
