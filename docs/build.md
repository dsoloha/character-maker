# `.build`

`class Build`

## Description

Properties pertaining to the character's physical build.

## Usage

```js
import { Build } from '@dsoloha/character-maker'

// create a blank instance:
const build = new Build()

// with parameters:
const build = new Build({
  height: 180,
})

// generate a random instance:
const build = new Build().generate()
```

## Properties

| Property  | Type     | Description                                      | Optional |
|:----------|:---------|:-------------------------------------------------|:---------|
| `height`  | `number` | How tall the character is, in cm.                | Yes      |
| `muscles` | `string` | How muscular the character is.                   | Yes      |
| `type`    | `string` | The character's build type (lithe, stocky, etc). | Yes      |
| `weight`  | `number` | How much the character weighs, in kg.            | Yes      |
