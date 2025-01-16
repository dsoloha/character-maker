# `.hips`

`class Hips`

## Description

Properties pertaining to the character's hips.

## Usage

```js
import { Hips } from '@dsoloha/character-maker'

// create a blank instance:
const hips = new Hips()

// with parameters:
const hips = new Hips({ size: 'wide' })

// generate a random instance:
const hips = new Hips().generate()
```

## Properties

| Property | Type     | Description                        | Optional |
|:---------|:---------|:-----------------------------------|:---------|
| `size`   | `string` | How wide the character's hips are. | Yes      |
