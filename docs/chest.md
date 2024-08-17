# `.chest`

`class Chest`

## Usage

Properties pertaining to the character's chest.

## Usage

```js
import { Chest } from '@dsoloha/character-maker'

// create a blank instance:
const chest = new Chest()

// with parameters:
const chest = new Chest({ size: 'flat', })

// generate a random instance:
const chest = new Chest().generate()
```

## Properties

| Property | Type     | Description                        | Optional |
|:---------|:---------|:-----------------------------------|:---------|
| `size`   | `string` | The size of the character's chest. | Yes      |
