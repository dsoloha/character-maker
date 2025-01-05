# `.teeth`

`class Teeth`

## Description

Properties pertaining to the character's teeth.

## Usage

```js
import { teeth } from '@dsoloha/character-maker'

// create a blank instance:
const teeth = new Teeth()

// with parameters:
const teeth = new Teeth({ count: 30 })

// generate a random instance:
const teeth = new Teeth().generate()
```

## Properties

| Property      | Type     | Description                                  | Optional |
|:--------------|:---------|:---------------------------------------------|:---------|
| `count`       | `number` | How many teeth the character has, out of 32. | Yes      |
| `description` | `string` | A description of the character's teeth.      | Yes      |
