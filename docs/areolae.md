# `.Areolae`

`class Areolae`

## Description

Properties pertaining to the character's areolae.

## Usage

```js
import { Areolae } from '@dsoloha/character-maker'

// create a blank instance:
const areolae = new Areolae()

// with parameters:
const areolae = new Areolae({ description: 'normal' })

// generate a random instance:
const areolae = new Areolae().generate()
```

## Properties

| Property      | Type     | Description                  | Optional |
|:--------------|:---------|:-----------------------------|:---------|
| `description` | `string` | A description of the areola. | Yes      |
