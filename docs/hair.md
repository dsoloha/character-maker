# `.hair`

`class Hair`

## Description

Properties pertaining to all hair on the character's body.

## Usage

```js
import { Hair } from '@dsoloha/character-maker'

// create a blank instance:
const hair = new Hair()

// with parameters:
const hair = new Hair({ head: { color: 'gray', length: 'short' } })

// generate a random instance:
const eyes = new Eyes().generate()
```

## Properties

| Property    | Type     | Description                               | Optional |
|:------------|:---------|:------------------------------------------|:---------|
| `head`      | `object` | The hair on the character's head.         | Yes      |
| `face`      | `object` | The hair on the character's face.         | Yes      |
| `underarms` | `object` | The hair on the character's underarms.    | Yes      |
| `chest`     | `object` | The hair on the character's chest.        | Yes      |
| `pubic`     | `object` | The hair on the character's pubic region. | Yes      |
| `arm`       | `object` | The hair on the character's arms.         | Yes      |
| `leg`       | `object` | The hair on the character's legs.         | Yes      |

### `.head` *`object`*

#### Description

The hair on the character's head.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.face` *`object`*

#### Description

The hair on the character's face.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.underarms` *`object`*

#### Description

The hair on the character's underarms.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.chest` *`object`*

#### Description

The hair on the character's chest.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.pubic` *`object`*

#### Description

The hair on the character's pubic region.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.arm` *`object`*

#### Description

The hair on the character's arms.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.leg` *`object`*

#### Description

The hair on the character's legs.

#### Properties

| Property | Type     | Description             | Optional |
|:---------|:---------|:------------------------|:---------|
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |
