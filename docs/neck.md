# `.neck`

`class Neck`

## Description

Properties pertaining to the character's neck.

## Declaration

```js
import { Neck } from 'character-maker'

const neck = new Neck()

// or optionally with parameters:

const neck = new Neck({
  larynx: false,
})
```

## Properties

| Property | Type      | Description                                   | Optional |
| :------- | :-------- | :-------------------------------------------- | :------- |
| `larynx` | `boolean` | Whether or not the character has vocal cords. | Yes      |
