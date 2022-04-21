# `.legs`

`class Legs`

## Description

Properties pertaining to the character's legs.

## Declaration

```js
import { Legs } from '@dsoloha/character-maker'

const legs = new Legs()

// or optionally with parameters:

const legs = new Legs({
  left: {
    size: 'huge',
  }
})
```

## Properties

| Property | Type     | Description                                         | Optional |
| :------- | :------- | :-------------------------------------------------- | :------- |
| `left`   | `object` | Properties pertaining to the character's left leg.  | Yes      |
| `right`  | `object` | Properties pertaining to the character's right leg. | Yes      |

### `.left`

#### Description

Properties pertaining to the character's left leg.

#### Properties

| Property | Type     | Description                                   | Optional |
| :------- | :------- | :-------------------------------------------- | :------- |
| `foot`   | `object` | Properties pertaining to the foot on the leg. | Yes      |
| `size`   | `size`   | Properties pertaining to the leg's size.      | Yes      |

### `.right`

#### Description

Properties pertaining to the character's right leg.

#### Properties

| Property | Type     | Description                                   | Optional |
| :------- | :------- | :-------------------------------------------- | :------- |
| `foot`   | `object` | Properties pertaining to the foot on the leg. | Yes      |
| `size`   | `size`   | Properties pertaining to the leg's size.      | Yes      |

### `.foot`

See [`Foot`](./foot) for properties relating to the `Foot` class.
