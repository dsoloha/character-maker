# `.legs`

`class Legs`

## Description

Properties pertaining to the character's legs.

## Usage

```js
import { Legs } from '@dsoloha/character-maker'

// create a blank instance:
const legs = new Legs()

// with parameters:
const legs = new Legs({ left: { fingers: 4 } })

// generate a random instance:
const legs = new Legs().generate()
```

## Properties

| Property | Type     | Description                                         | Optional |
|:---------|:---------|:----------------------------------------------------|:---------|
| `left`   | `object` | Properties pertaining to the character's left leg.  | Yes      |
| `right`  | `object` | Properties pertaining to the character's right leg. | Yes      |

### `.left` *`object`*

#### Description

Properties pertaining to the character's left leg.

#### Properties

| Property | Type     | Description                                   | Optional |
|:---------|:---------|:----------------------------------------------|:---------|
| `foot`   | `object` | Properties pertaining to the foot on the leg. | Yes      |
| `size`   | `size`   | Properties pertaining to the leg's size.      | Yes      |

### `.left.foot` *`object`*

See [`Foot`](./foot) for properties relating to the `Foot` class.

### `.right` *`object`*

#### Description

Properties pertaining to the character's right leg.

#### Properties

| Property | Type     | Description                                   | Optional |
|:---------|:---------|:----------------------------------------------|:---------|
| `foot`   | `object` | Properties pertaining to the foot on the leg. | Yes      |
| `size`   | `size`   | Properties pertaining to the leg's size.      | Yes      |

### `.right.foot` *`object`*

See [`Foot`](./foot) for properties relating to the `Foot` class.
