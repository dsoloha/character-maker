# `.health`

`class Health`

## Description

Properties pertaining to the character's overall health.

## Declaration

```js
import { Health } from 'character-maker'

const health = new Health()

// or optionally with parameters:

const health = new Health({
  illnesses: ['common cold'],
})
```

## Properties

| Property    | Type       | Description                                | Optional |
| :---------- | :--------- | :----------------------------------------- | :------- |
| `illnesses` | `string[]` | Any illnesses the character currently has. | Yes      |
| `injuries`  | `string[]` | Any injuries the character currently has.  | Yes      |
