# `.arm`

*`class Arm`*

## Description

Properties pertaining to the character's arm.

## Usage

```js
import { Arm } from '@dsoloha/character-maker'

// create a blank instance:
const arm = new Arm()

// with parameters:
const arm = new Arm({ left: { fingers: 4 } })

// generate a random instance:
const arm = new Arm().generate()
  ```

## Properties

| Property | Type     | Description                                         | Optional |
|:---------|:---------|:----------------------------------------------------|:---------|
| `left`   | `object` | Properties pertaining to the character's left arm.  | Yes      |
| `right`  | `object` | Properties pertaining to the character's right arm. | Yes      |

### `.left` *`object`*

#### Description

Properties pertaining to the character's left arm.

#### Properties

| Property | Type     | Description                                   | Optional |
|:---------|:---------|:----------------------------------------------|:---------|
| `hand`   | `object` | Properties pertaining to the hand on the arm. | Yes      |
| `size`   | `string` | Properties pertaining to the arm's size.      | Yes      |

### `.left.hand` *`object`*

See [`Hand`](./hand) for properties pertaining to the `Hand` class.

### `.right` *`object`*

#### Description

Properties pertaining to the character's right arm.

#### Properties

| Property | Type     | Description                                   | Optional |
|:---------|:---------|:----------------------------------------------|:---------|
| `hand`   | `object` | Properties pertaining to the hand on the arm. | Yes      |
| `size`   | `string` | Properties pertaining to the arm's size.      | Yes      |

### `.right.hand` *`object`*

See [`Hand`](./hand) for properties pertaining to the `Hand` class.
