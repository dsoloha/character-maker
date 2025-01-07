# `.crotch`

`class Crotch`

## Description

Properties pertaining to the character's crotch.

## Usage

```js
import { Crotch } from '@dsoloha/character-maker'

// create a blank instance:
const crotch = new Crotch()

// with parameters:
const crotch = new Crotch({ anus: { description: 'unremarkable' } })

// generate a random instance:
const crotch = new Crotch().generate()
```

## Properties

| Property    | Type               | Description                                                 | Optional |
|:------------|:-------------------|:------------------------------------------------------------|:---------|
| `anus`      | `object`           | Properties pertaining to the character's anus.              | Yes      |
| `ovaries`   | `object` or `null` | Properties pertaining to the character's ovaries, if any.   | Yes      |
| `penis`     | `object` or `null` | Properties pertaining to the character's penis, if any.     | Yes      |
| `testicles` | `object` or `null` | Properties pertaining to the character's testicles, if any. | Yes      |
| `vagina`    | `object` or `null` | Properties pertaining to the character's vagina, if any.    | Yes      |

### `.anus` *`object`*

#### Description

Properties pertaining to the character's anus.

#### Properties

| Property      | Type     | Description                            | Optional |
|:--------------|:---------|:---------------------------------------|:---------|
| `description` | `string` | A description of the character's anus. | No       |

### `.ovaries` *`object`*

#### Description

Properties pertaining to the character's ovaries, if any.

#### Properties

| Property  | Type      | Description                                | Optional |
|:----------|:----------|:-------------------------------------------|:---------|
| `fertile` | `boolean` | Whether the character is sexually fertile. | No       |

### `.penis` *`object`*

#### Description

Properties pertaining to the character's penis, if any.

#### Properties

| Property | Type     | Description                        | Optional |
|:---------|:---------|:-----------------------------------|:---------|
| `size`   | `string` | The size of the character's penis. | No       |

### `.testicles` *`object`*

#### Description

Properties pertaining to the character's testicles, if any.

#### Properties

| Property | Type      | Description                               | Optional |
|:---------|:----------|:------------------------------------------|:---------|
| `size`   | `string`  | The size of the character's testicles.    | No       |
| `potent` | `boolean` | Whether the character is sexually potent. | Yes      |

### `.vagina` *`object`*

#### Description

Properties pertaining to the character's vagina, if any.

#### Properties

| Property      | Type     | Description                              | Optional |
|:--------------|:---------|:-----------------------------------------|:---------|
| `description` | `string` | A description of the character's vagina. | No       |
