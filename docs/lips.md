# `.lips`

`class Lips`

## Description

Properties pertaining to the character's lips.

## Usage

```js
import { lips } from '@dsoloha/character-maker'

// create a blank instance:
const lips = new Lips()

// with parameters:
const lips = new Lips({ description: 'normal' })

// generate a random instance:
const lips = new Lips().generate()
```

## Properties

| Property      | Type     | Description                            | Optional |
|:--------------|:---------|:---------------------------------------|:---------|
| `description` | `string` | A description of the character's lips. | Yes      |
