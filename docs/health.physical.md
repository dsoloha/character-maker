# `.health`

`class Health`

## Description

Properties pertaining to the character's overall physical health.

## Usage

```js
import { Health } from '@dsoloha/character-maker'

// create a blank instance:
const health = new Health()

// with parameters:
const health = new Health({ illnesses: ['common cold'] })

// generate a random instance:
const health = new Health().generate()
```

## Properties

| Property    | Type       | Description                                         | Optional |
|:------------|:-----------|:----------------------------------------------------|:---------|
| `illnesses` | `string[]` | Any physical illnesses the character currently has. | Yes      |
| `injuries`  | `string[]` | Any injuries the character currently has.           | Yes      |
