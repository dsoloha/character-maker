# `.butt`

*`class Butt`*

## Description

Properties pertaining to the character's butt.

## Usage

```js
import { Butt } from '@dsoloha/character-maker'

// create a blank instance:
const butt = new Butt()

// with parameters:
const butt = new Butt({ description: 'average' })

// generate a random instance:
const butt = new Butt().generate()
  ```

## Properties

| Property      | Type     | Description                                    | Optional |
|:--------------|:---------|:-----------------------------------------------|:---------|
| `description` | `string` | A description of the character's butt.         | No       |
| `anus`        | `object` | Properties pertaining to the character's anus. | Yes      |

### `.anus` *`object`*

#### Description

See [`Anus`](./anus) for properties pertaining to the `Anus` class.
