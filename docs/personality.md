# `.personality`

`class personality`

## Description

Properties pertaining to the character's personality.

## Usage

```js
import { personality } from '@dsoloha/character-maker'

// create a blank instance:
const personality = new Personality()

// with parameters:
const personality = new Personality({ likes: ['swimming'] })

// generate a random instance:
const personality = new Personality().generate()
```

## Properties

| Property       | Type       | Description                                                        | Optional |
|:---------------|:-----------|:-------------------------------------------------------------------|:---------|
| `type`         | `string`   | The Myers-Briggs personality type the character most closely fits. | Yes      |
| `intelligence` | `number`   | How intelligent the character is, from 0-100.                      | Yes      |
| `likes`        | `string[]` | A list of things the character likes.                              | Yes      |
| `dislikes`     | `string[]` | A list of things the character dislikes.                           | Yes      |
| `fears`        | `string[]` | A list of things the character fears.                              | Yes      |
