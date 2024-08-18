# `.waist`

`class Waist`

## Description

Properties pertaining to the character's waist.

## Usage

```js
import { Waist } from '@dsoloha/character-maker'

// create a blank instance:
const waist = new Waist()

// with parameters:
const waist = new Waist({ size: 'average' })

// generate a random instance:
const waist = new Waist().generate()
```

## Properties

| Property | Type     | Description                        | Optional |
|:---------|:---------|:-----------------------------------|:---------|
| `size`   | `string` | The size of the character's waist. | Yes      |
