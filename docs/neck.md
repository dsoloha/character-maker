# `.neck`

`class Neck`

## Description

Properties pertaining to the character's neck.

## Usage

```js
import { Neck } from '@dsoloha/character-maker'

// create a blank instance:
const neck = new Neck()

// with parameters:
const neck = new Neck({ larynx: false })

// generate a random instance:
const neck = new Neck().generate()
```

## Properties

| Property | Type      | Description                                   | Optional |
|:---------|:----------|:----------------------------------------------|:---------|
| `larynx` | `boolean` | Whether or not the character has vocal cords. | Yes      |
