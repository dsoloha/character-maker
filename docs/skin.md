# `.skin`

`class Skin`

## Description

Properties pertaining to the character's skin.

## Declaration

```js
import { Skin } from 'character-maker'

const skin = new Skin()

// or optionally with parameters:

const skin = new Skin({
  color: 'blue',
})
```

## Properties

| Property     | Type          | Description                        | Optional |
| :----------- | :------------ | :--------------------------------- | :------- |
| `color`      | `string`      | The color of the character's skin. | Yes      |
| `birthmarks` | `object|null` | Any birthmarks the character has.  | Yes      |
| `brands`     | `object|null` | Any brands the character has.      | Yes      |
| `markings`   | `object|null` | Any markings the character has.    | Yes      |
| `scars`      | `object|null` | Any scars the character has.       | Yes      |
| `tattoos`    | `object|null` | Any tattoos the character has.     | Yes      |

### `.birthmarks`

#### Description

Any birthmarks the character has.

#### Properties

| Property      | Type     | Description                | Optional |
| :------------ | :------- | :------------------------- | :------- |
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.brands`

#### Description

Any brands the character has.

#### Properties

| Property      | Type     | Description                | Optional |
| :------------ | :------- | :------------------------- | :------- |
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.markings`

#### Description

Any markings the character has.

#### Properties

| Property      | Type     | Description                | Optional |
| :------------ | :------- | :------------------------- | :------- |
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.scars`

#### Description

Any scars the character has.

#### Properties

| Property      | Type     | Description                | Optional |
| :------------ | :------- | :------------------------- | :------- |
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |

### `.tattoos`

#### Description

Any tattoos the character has.

#### Properties

| Property      | Type     | Description                | Optional |
| :------------ | :------- | :------------------------- | :------- |
| `location`    | `string` | Where the mark is located. | No       |
| `description` | `string` | A description of the mark. | No       |
