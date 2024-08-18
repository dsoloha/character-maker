# `.foot`

`class Foot`

## Description

Properties pertaining to the foot on the leg.

## Usage

```js
import { Foot } from '@dsoloha/character-maker'

// create a blank instance:
const foot = new Foot()

// with parameters:
const foot = new Foot({ toes: 4 })

// generate a random instance:
const foot = new Foot().generate()
```

## Properties

| Property | Type     | Description                 | Optional |
|:---------|:---------|:----------------------------|:---------|
| `toes`   | `number` | How many toes the foot has. | Yes      |
