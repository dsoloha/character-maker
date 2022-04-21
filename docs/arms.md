# `.arms`

`class Arms`

## Description

Properties pertaining to the character's arms.

## Declaration

```js
import { Arms } from '@dsoloha/character-maker'

const arms = new Arms()

// or optionally with parameters:

const arms = new Arms({
})
```

## Properties

| Property | Type     | Description                                         | Optional |
| :------- | :------- | :-------------------------------------------------- | :------- |
| `left`   | `object` | Properties pertaining to the character's left arm.  | Yes      |
| `right`  | `object` | Properties pertaining to the character's right arm. | Yes      |

### `.left`

#### Description

Properties pertaining to the character's left arm.

#### Properties

| Property | Type     | Description                                   | Optional |
| :------- | :------- | :-------------------------------------------- | :------- |
| `hand`   | `object` | Properties pertaining to the hand on the arm. | Yes      |
| `size`   | `string` | Properties pertaining to the arm's size.      | Yes      |

### `.right`

#### Description

Properties pertaining to the character's right arm.

#### Properties

| Property | Type     | Description                                   | Optional |
| :------- | :------- | :-------------------------------------------- | :------- |
| `hand`   | `object` | Properties pertaining to the hand on the arm. | Yes      |
| `size`   | `string` | Properties pertaining to the arm's size.      | Yes      |

### `.hand`

See [`Hand`](./hand) for properties relating to the `Hand` class.
