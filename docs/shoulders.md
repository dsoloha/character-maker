# `.shoulders`

`class Shoulders`

## Description

Properties pertaining to the character's shoulders.

## Usage

```js
import { Shoulders } from '@dsoloha/character-maker'

// create a blank instance:
const shoulders = new Shoulders()

// with parameters:
const shoulders = new Shoulders({ width: 'broad' })

// generate a random instance:
const shoulders = new Shoulders().generate()
```

## Properties

| Property | Type     | Description                             | Optional |
|:---------|:---------|:----------------------------------------|:---------|
| `width`  | `string` | The width of the character's shoulders. | Yes      |
