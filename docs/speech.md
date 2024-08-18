# `.speech`

`class Speech`

## Description

Properties pertaining to the character's speech.

## Usage

```js
import { Speech } from '@dsoloha/character-maker'

// create a blank instance:
const speech = new Speech()

// with parameters:
const speech = new Speech({ style: 'posh' })

// generate a random instance:
const speech = new Speech().generate()
```

## Properties

| Property | Type     | Description                        | Optional |
|:---------|:---------|:-----------------------------------|:---------|
| `style`  | `string` | The character's style of speaking. | Yes      |
