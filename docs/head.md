# `.head`

`class Head`

## Description

Properties pertaining to the character's head.

## Usage

```js
import { head } from '@dsoloha/character-maker'

// create a blank instance:
const head = new Head()

// with parameters:
const head = new Head({ mouth: { teeth: { count: 30 } } })

// generate a random instance:
const head = new Head().generate()
```

## Properties

| Property | Type     | Description                                     | Optional |
|:---------|:---------|:------------------------------------------------|:---------|
| `eyes`   | `object` | Properties pertaining to the character's eyes.  | No       |
| `face`   | `object` | Properties pertaining to the character's face.  | No       |
| `mouth`  | `object` | Properties pertaining to the character's mouth. | No       |
| `nose`   | `object` | Properties pertaining to the character's nose.  | No       |
| `neck`   | `object` | Properties pertaining to the character's neck.  | No       |
