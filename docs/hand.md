# `.hand`

`class Hand`

## Description

Properties pertaining to the hand on the arm.

## Declaration

```js
import { Hand } from '@dsoloha/character-maker'

// create a blank instance:
const hand = new Hand()

// with parameters:
const hand = new Hand({ fingers: 4 })

// generate a random instance:
const hand = new Hand().generate()
```

## Properties

| Property  | Type     | Description                    | Optional |
|:----------|:---------|:-------------------------------|:---------|
| `fingers` | `number` | How many fingers the hand has. | Yes      |
