# `.nipples`

`class Nipples`

## Description

Properties pertaining to the character's nipples.

## Usage

```js
import { Nipples } from '@dsoloha/character-maker'

// create a blank instance:
const nipples = new Nipples()

// with parameters:
const nipples = new Nipples({ size: 'normal' })

// generate a random instance:
const nipples = new Nipples().generate()
```

## Properties

| Property | Type     | Description                            | Optional |
|:---------|:---------|:---------------------------------------|:---------|
| `size`   | `string` | How large the character's nipples are. | Yes      |
