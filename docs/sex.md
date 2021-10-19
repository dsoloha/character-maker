# `.sex`

`class Sex`

## Description

Properties pertaining to the character's biological sex.

## Declaration

```js
import { Sex } from 'character-maker'

const sex = new Sex()

// or optionally with parameters:

const sex = new Sex({
  type: 'male',
})
```

## Properties

| Property | Type                                | Description                          | Optional |
| :------- | :---------------------------------- | :----------------------------------- | :------- |
| `type`   | `'male'|'female'|'plural'|'neuter'` | The biological sex of the character. | Yes      |
