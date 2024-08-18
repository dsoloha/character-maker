# `.name`

`class Name`

## Description

Properties pertaining to the character's name.

## Usage

```js
import { Name } from '@dsoloha/character-maker'

// create a blank instance:
const name = new Name()

// with parameters:
const name = new Name({ first: 'Name' })

// generate a random instance:
const name = new Name().generate()
```

## Properties

| Property    | Type               | Description                          | Optional |
|:------------|:-------------------|:-------------------------------------|:---------|
| `first`     | `string`           | The character's first name.          | Yes      |
| `middle`    | `string` or `null` | The character's middle name, if any. | Yes      |
| `last`      | `string` or `null` | The character's last name, if any.   | Yes      |
| `nicknames` | `string[]`         | Any nicknames the character has.     | Yes      |
