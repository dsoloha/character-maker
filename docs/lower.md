# `.lower`

`class Lower`

## Description

Properties pertaining to the character's lower half.

## Usage

```js
import { Lower } from '@dsoloha/character-maker'

// create a blank instance:
const lower = new Lower()

// with parameters:
const lower = new Lower({ waist: { size: 'small' } })

// generate a random instance:
const lower = new Lower().generate()
```

## Properties

| Property | Type     | Description                                     | Optional |
|:---------|:---------|:------------------------------------------------|:---------|
| `leg`    | `object` | Properties pertaining to the character's legs.  | Yes      |
| `waist`  | `object` | Properties pertaining to the character's waist. | Yes      |

### `.leg` *`object`*

See [Leg](./leg) for properties pertaining to the `Leg` class.

### `.waist` *`object`*

See [Waist](./waist) for properties pertaining to the `Waist` class.
