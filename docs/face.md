# `.face`

`class Face`

## Description

Properties pertaining to the character's face.

## Usage

```js
import { face } from '@dsoloha/character-maker'

// create a blank instance:
const face = new Face()

// with parameters:
const face = new Face({ attractiveness: 75 })

// generate a random instance:
const face = new Face().generate()
```

## Properties

| Property         | Type     | Description                                            | Optional |
|:-----------------|:---------|:-------------------------------------------------------|:---------|
| `attractiveness` | `number` | The character's attractiveness, on a scale from 1-100. | Yes      |
| `description`    | `object` | The description of the character's face.               | Yes      |
