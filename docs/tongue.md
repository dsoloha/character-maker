# `.tongue`

`class Tongue`

## Description

Properties pertaining to the character's tongue.

## Usage

```js
import { tongue } from '@dsoloha/character-maker'

// create a blank instance:
const tongue = new Tongue()

// with parameters:
const tongue = new Tongue({ ageusia: true })

// generate a random instance:
const tongue = new Tongue().generate()
```

## Properties

| Property      | Type      | Description                                   | Optional |
|:--------------|:----------|:----------------------------------------------|:---------|
| `ageusia`     | `boolean` | Whether the character lacks a sense of taste. | Yes      |
| `description` | `string`  | A description of the character's tongue.      | Yes      | 
