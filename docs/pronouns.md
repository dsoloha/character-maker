# `.pronouns`

`class Pronouns`

## Description

The pronouns assigned to the character.

## Usage

The `Pronouns` class is a helper class intended to make the process of writing text with different characters and their
pronouns easier.

```js
import { Pronouns } from '@dsoloha/character-maker'

const malePronouns = new Pronouns('male')
const femalePronouns = new Pronouns('female')

console.log(malePronouns.reflexive) // expected output: 'himself'
console.log(femalePronouns.noun) // expected output: 'woman'
```

## Properties

| Property             | Type     | Description                                                                                    |
|:---------------------|:---------|:-----------------------------------------------------------------------------------------------|
| `subject`            | `string` | The subject form of the character's pronouns ('he', 'she', 'they', 'it').                      |
| `object`             | `string` | The object form of the character's pronouns ('him', 'her', 'them', 'it').                      |
| `possessive`         | `string` | The possessive form of the character's pronouns ('his', 'her', 'their', 'its').                |
| `possessivePronouns` | `string` | The possessive pronoun form of the character's pronouns ('his', 'hers', 'theirs', 'its').      |
| `noun`               | `string` | The noun form of the character's pronouns ('man', 'woman', 'people', 'thing').                 |
| `reflexive`          | `string` | The reflexive form of the character's pronouns ('himself', 'herself', 'themselves', 'itself'). |
