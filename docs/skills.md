# `.skills`

`class Skills`

## Description

Properties pertaining to the character's skills.

## Usage

```js
import { Skills } from '@dsoloha/character-maker'

// create a blank instance:
const skills = new Skills()

// with parameters:
const skills = new Skills({ art: 75 })

// generate a random instance:
const skills = new Skills().generate()
```

## Properties

| Property        | Type     | Description                                    | Optional |
|:----------------|:---------|:-----------------------------------------------|:---------|
| `acrobatics`    | `number` | How skilled the character is at acrobatics.    | Yes      | 
| `art`           | `number` | How skilled the character is in art.           | Yes      | 
| `bartering`     | `number` | How skilled the character is at bartering.     | Yes      | 
| `blacksmithing` | `number` | How skilled the character is at blacksmithing. | Yes      | 
| `carpentry`     | `number` | How skilled the character is at carpentry.     | Yes      | 
| `cartography`   | `number` | How skilled the character is at cartography.   | Yes      | 
| `cooking`       | `number` | How skilled the character is at cooking.       | Yes      | 
| `combat`        | `number` | How skilled the character is at combat.        | Yes      | 
| `diplomacy`     | `number` | How skilled the character is at diplomacy.     | Yes      | 
| `engineering`   | `number` | How skilled the character is at engineering.   | Yes      | 
| `farming`       | `number` | How skilled the character is at farming.       | Yes      | 
| `firemaking`    | `number` | How skilled the character is at firemaking.    | Yes      | 
| `fishing`       | `number` | How skilled the character is at fishing.       | Yes      | 
| `hacking`       | `number` | How skilled the character is at hacking.       | Yes      | 
| `herbalism`     | `number` | How skilled the character is in herbalism.     | Yes      | 
| `hunting`       | `number` | How skilled the character is at hunting.       | Yes      | 
| `medicine`      | `number` | How skilled the character is at medicine.      | Yes      | 
| `mining`        | `number` | How skilled the character is at mining.        | Yes      | 
| `research`      | `number` | How skilled the character is at researching.   | Yes      | 
| `sailing`       | `number` | How skilled the character is at sailing.       | Yes      | 
| `stealth`       | `number` | How skilled the character is at stealth.       | Yes      | 
| `swimming`      | `number` | How skilled the character is at swimming.      | Yes      | 
