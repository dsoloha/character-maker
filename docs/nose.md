# `.nose`

`class Nose`

## Description

Properties pertaining to the character's nose.

## Usage

```js
import { Nose } from '@dsoloha/character-maker'

// create a blank instance:
const nose = new Nose()

// with parameters:
const nose = new Nose({ anosmia: true })

// generate a random instance:
const nose = new Nose().generate()
```

## Properties

| Property  | Type      | Description                                                  | Optional |
|:----------|:----------|:-------------------------------------------------------------|:---------|
| `anosmia` | `boolean` | Whether or not the character has a lack of a sense of smell. | Yes      |
