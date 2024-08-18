# `.sex`

`class Sex`

## Description

Properties pertaining to the character's biological sex.

## Declaration

```js
import { Sex } from '@dsoloha/character-maker'

// create a blank instance:
const sex = new Sex()

// with parameters:
const sex = new Sex({ type: 'male' })

// generate a random instance:
const sex = new Sex().generate()
```

## Properties

| Property | Type                   | Description                          | Optional |
|:---------|:-----------------------|:-------------------------------------|:---------|
| `type`   | `'male'` or `'female'` | The biological sex of the character. | Yes      |
