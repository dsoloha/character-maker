# `.health`

`class Health`

## Description

Properties pertaining to the character's overall mental health.

## Usage

```js
import { Health } from '@dsoloha/character-maker'

// create a blank instance:
const health = new Health()

// with parameters:
const health = new Health({ illnesses: ['anxiety'] })

// generate a random instance:
const health = new Health().generate()
```

## Properties

| Property    | Type       | Description                                                            | Optional |
|:------------|:-----------|:-----------------------------------------------------------------------|:---------|
| `illnesses` | `string[]` | Any mental illnesses the character currently has.                      | Yes      |
| `stress`    | `number`   | How much stress the character is currently under, on a scale of 0-100. | Yes      |
