# `.stomach`

`class Stomach`

## Description

Properties pertaining to the character's stomach.

## Usage

```js
import { Stomach } from '@dsoloha/character-maker'

// create a blank instance:
const stomach = new Stomach()

// with parameters:
const stomach = new Stomach({ shape: 'flat' })

// generate a random instance:
const stomach = new Stomach().generate()
```

## Properties

| Property | Type     | Description                           | Optional |
|:---------|:---------|:--------------------------------------|:---------|
| `shape`  | `string` | The shape of the character's stomach. | Yes      |
