# `.hair`

`class Hair`

## Description

Properties pertaining to all hair on the character's body.

## Declaration

```js
import { Hair } from '@dsoloha/character-maker'

const hair = new Hair()

// or optionally with parameters:

const hair = new Hair({
  head: {
    color: 'red',
    length: 'short',
    style: 'straight',
  }
})
```

## Properties

| Property    | Type     | Description                               | Optional |
| :---------- | :------- | :---------------------------------------- | :------- |
| `head`      | `object` | The hair on the character's head.         | Yes      |
| `face`      | `object` | The hair on the character's face.         | Yes      |
| `underarms` | `object` | The hair on the character's underarms.    | Yes      |
| `chest`     | `object` | The hair on the character's chest.        | Yes      |
| `pubic`     | `object` | The hair on the character's pubic region. | Yes      |
| `arm`       | `object` | The hair on the character's arms.         | Yes      |
| `leg`       | `object` | The hair on the character's legs.         | Yes      |

### `.head`

#### Description

The hair on the character's head.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.face`

#### Description

The hair on the character's face.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.underarms`

#### Description

The hair on the character's underarms.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.chest`

#### Description

The hair on the character's chest.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.pubic`

#### Description

The hair on the character's pubic region.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.arm`

#### Description

The hair on the character's arms.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |

### `.leg`

#### Description

The hair on the character's legs.

#### Properties

| Property | Type     | Description             | Optional |
| :------- | :------- | :---------------------- | :------- |
| `color`  | `string` | The color of the hair.  | No       |
| `length` | `string` | The length of the hair. | No       |
| `style`  | `string` | The style of the hair.  | No       |
