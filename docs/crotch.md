# `.crotch`

`class Crotch`

## Description

Properties pertaining to the character's crotch.

## Declaration

```js
import { Crotch } from 'character-maker'

const crotch = new Crotch()

// or optionally with parameters:

const crotch = new Crotch({
  anus: {
    description: 'unremarkable',
  }
})
```

## Properties

| Property    | Type          | Description                                                 | Optional |
| :---------- | :------------ | :---------------------------------------------------------- | :------- |
| `anus`      | `object`      | Properties pertaining to the character's anus.              | Yes      |
| `ovaries`   | `object|null` | Properties pertaining to the character's ovaries, if any.   | Yes      |
| `penis`     | `object|null` | Properties pertaining to the character's penis, if any.     | Yes      |
| `testicles` | `object|null` | Properties pertaining to the character's testicles, if any. | Yes      |
| `vagina`    | `object|null` | Properties pertaining to the character's vagina, if any.    | Yes      |

### `.anus`

#### Description

Properties pertaining to the character's anus.

#### Properties

| Property      | Type     | Description                            | Optional |
| :------------ | :------- | :------------------------------------- | :------- |
| `description` | `string` | A description of the character's anus. | No       |

### `.ovaries`

#### Description

Properties pertaining to the character's ovaries, if any.

#### Properties

| Property    | Type      | Description                                              | Optional |
| :---------- | :-------- | :------------------------------------------------------- | :------- |
| `menopause` | `boolean` | Whether or not the character has gone through menopause. | No       |

### `.penis`

#### Description

Properties pertaining to the character's penis, if any.

#### Properties

| Property | Type     | Description                        | Optional |
| :------- | :------- | :--------------------------------- | :------- |
| `size`   | `string` | The size of the character's penis. | No       |

### `.testicles`

#### Description

Properties pertaining to the character's testicles, if any.

#### Properties

| Property    | Type      | Description                                       | Optional |
| :---------- | :-------- | :------------------------------------------------ | :------- |
| `size`      | `string`  | The size of the character's testicles.            | No       |
| `vasectomy` | `boolean` | Whether or not the character has had a vasectomy. | No       |

### `.vagina`

#### Description

Properties pertaining to the character's vagina, if any.

#### Properties

| Property      | Type     | Description                              | Optional |
| :------------ | :------- | :--------------------------------------- | :------- |
| `description` | `string` | A description of the character's vagina. | No       |
