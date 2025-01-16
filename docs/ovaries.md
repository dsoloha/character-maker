# `.ovaries`

`class Ovaries`

## Description

Properties pertaining to the character's ovaries.

## Usage

```js
import { Ovaries } from '@dsoloha/character-maker'

// create a blank instance:
const ovaries = new Ovaries()

// with parameters:
const ovaries = new Ovaries({ fertile: false })

// generate a random instance:
const ovaries = new Ovaries().generate()
```

## Properties

| Property  | Type      | Description                      | Optional |
|:----------|:----------|:---------------------------------|:---------|
| `fertile` | `boolean` | Whether the ovaries are fertile. | Yes      |
