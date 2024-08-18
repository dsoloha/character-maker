# `.skin`

`class Skin`

## Description

Properties pertaining to the character's skin.

## Usage

```js
import { Skin } from '@dsoloha/character-maker'

// create a blank instance:
const skin = new Skin()

// with parameters:
const skin = new Skin({ color: 'tan' })

// generate a random instance:
const skin = new Skin().generate()
```

## Properties

| Property     | Type               | Description                        | Optional |
|:-------------|:-------------------|:-----------------------------------|:---------|
| `color`      | `string`           | The color of the character's skin. | Yes      |
| `birthmarks` | `object` or `null` | Any birthmarks the character has.  | Yes      |
| `brands`     | `object` or `null` | Any brands the character has.      | Yes      |
| `markings`   | `object` or `null` | Any markings the character has.    | Yes      |
| `scars`      | `object` or `null` | Any scars the character has.       | Yes      |
| `tattoos`    | `object` or `null` | Any tattoos the character has.     | Yes      |

### `.birthmarks` *`object`*

#### Description

Any birthmarks the character has.

#### Properties

| Property      | Type     | Description                | Optional |
|:--------------|:---------|:---------------------------|:---------|
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.brands` *`object`*

#### Description

Any brands the character has.

#### Properties

| Property      | Type     | Description                | Optional |
|:--------------|:---------|:---------------------------|:---------|
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.markings` *`object`*

#### Description

Any markings the character has.

#### Properties

| Property      | Type     | Description                | Optional |
|:--------------|:---------|:---------------------------|:---------|
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.scars` *`object`*

#### Description

Any scars the character has.

#### Properties

| Property      | Type     | Description                | Optional |
|:--------------|:---------|:---------------------------|:---------|
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.tattoos` *`object`*

#### Description

Any tattoos the character has.

#### Properties

| Property      | Type     | Description                | Optional |
|:--------------|:---------|:---------------------------|:---------|
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |
