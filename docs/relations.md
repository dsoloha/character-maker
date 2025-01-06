# `.relations`

`class Relations`

## Description

Properties pertaining to the character's relationships.

## Usage

```js
import { Relations } from '@dsoloha/character-maker'

// create a blank instance:
const relations = new Relations()

// with parameters:
const relations = new Relations({ larynx: false })

// generate a random instance:
const relations = new Relations().generate()
```

## Properties

| Property   | Type       | Description                                        | Optional |
|:-----------|:-----------|:---------------------------------------------------|:---------|
| `all`      | `number[]` | The ID of every character this character has met.  | Yes      |
| `enemies`  | `number[]` | Whether or not the character has vocal cords.      | Yes      |
| `family`   | `object`   | Properties pertaining to the character's family.   | Yes      |
| `friends`  | `number[]` | The IDs of this character's friends.               | Yes      |
| `partners` | `object`   | Properties pertaining to the character's partners. | Yes      |

### `.family` *`object`*

#### Description

Properties pertaining to the character's family.

#### Properties

| Property   | Type       | Description                                                                   | Optional |
|:-----------|:-----------|:------------------------------------------------------------------------------|:---------|
| `father`   | `number`   | The ID of the character's father.                                             | Yes      |
| `mother`   | `number`   | The ID of the character's mother.                                             | Yes      |
| `siblings` | `number[]` | The IDs of any character that shares at least one parent with this character. | Yes      |

### `.partners` *`object`*

#### Description

Properties pertaining to the character's partners.

| Property   | Type       | Description                                    | Optional |
|:-----------|:-----------|:-----------------------------------------------|:---------|
| `current`  | `number[]` | The IDs of this character's current partners.  | Yes      |
| `previous` | `number[]` | The IDs of this character's previous partners. | Yes      |
