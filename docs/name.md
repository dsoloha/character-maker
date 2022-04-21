# `.name`

`class Name`

## Description

Properties pertaining to the character's name.

## Declaration

```js
import { Name } from '@dsoloha/character-maker'

const name = new Name()

// or optionally with parameters:

const name = new Name({
  first: 'John',
  last: 'Smith',
})
```

## Properties

| Property    | Type          | Description                          | Optional |
| :---------- | :------------ | :----------------------------------- | :------- |
| `first`     | `string`      | The character's first name.          | Yes      |
| `middle`    | `string|null` | The character's middle name, if any. | Yes      |
| `last`      | `string|null` | The character's last name, if any.   | Yes      |
| `nicknames` | `string[]`    | Any nicknames the character has.     | Yes      |
