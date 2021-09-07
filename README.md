# character-maker

`character-maker` is a tool designed to help you create a new realistic character for your game, story, etc, quickly and easily.

**Note:** this library is currently heavily WIP and subject to changes. Use at your own risk.

## Usage

Install `character-maker`:

```sh
npm install character-maker
```

Import the module:

```js
import { Character } from "character-maker";
```

Create a new character:

```js
const character = new Character();

// or optionally with parameters

const character = new Character({
  name: {
    first: 'John',
    last: 'Smith',
  }
});
```

See `API` for more parameter options.

## API

| Option       | Value               | Type                                   | Description                                                                                                                                            | Default  |
|--------------|---------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| `age`        |                     | `object`                               | Properties pertaining to the character's age.                                                                                                          |          |
| `age.birth`  |                     | `object`                               | Properties pertaining to the character's birthtime.                                                                                                    |          |
|              | `day`               | `number`                               | On which day of the month the character was born.                                                                                                      | `1`      |
|              | `month`             | `number`                               | During which month of the year the character was born.                                                                                                 | `1`      |
|              | `year`              | `number`                               | During what year the character was born.                                                                                                               | `1`      |
| `background` |                     | `object`                               | Properties pertaining to the character's background and upbringing.                                                                                    |          |
|              | `birthplace`        | `string`                               | The character's birthplace.                                                                                                                            | `''`     |
| `eyes`       |                     | `object`                               | Properties pertaining to the character's eyes.                                                                                                         |          |
| `eyes.color` |                     | `string\|object`                       | The player's eye color or eye colors if different.                                                                                                     | `''`     |
|              | `left`              | `string`                               | The character's left eye color.                                                                                                                        |          |
|              | `right`             | `string`                               | The character's right eye color.                                                                                                                       |          |
| `hair`       |                     | `object`                               | Properties pertaining to all hair on the character's body.                                                                                             |          |
|              | `color`             | `string`                               | The color of the character's hair.                                                                                                                     | `''`     |
|              | `length`            | `string\|number`                       | The length of the character's hair.  Accepts either a descriptor ("short", "buzzed", etc.) or an integer in centimeters.                               | `''`     |
|              | `style`             | `string`                               | The style of the character's hair.                                                                                                                     | `''`     |
| `name`       |                     | `object`                               | Properties pertaining to the character's name.                                                                                                         |          |
|              | `first`             | `string`                               | The character's first name.                                                                                                                            | `''`     |
|              | `middle`            | `string\|null`                         | The character's middle name, if any.                                                                                                                   | `null`   |
|              | `last`              | `string\|null`                         | The character's last name, if any.                                                                                                                     | `null`   |
|              | `nicknames`         | `string[]`                             | Any nicknames the character has.                                                                                                                       | `[]`     |
| `pronouns`   |                     | `object`                               | The pronouns assigned to the character.                                                                                                                |          |
|              | `subject`           | `string`                               | The subject form of the character's pronouns ("he", "she", "they", "it").                                                                              |          |
|              | `object`            | `string`                               | The object form of the character's pronouns ("him", "her", "them", "it").                                                                              |          |
|              | `possessive`        | `string`                               | The possessive form of the character's pronouns ("his", "her", "their", "its").                                                                        |          |
|              | `possessivePronoun` | `string`                               | The possessive pronoun form of the character's pronouns ("his", "hers", "theirs", "its").                                                              |          |
|              | `noun`              | `string`                               | The noun form of the character's pronouns ("man", "woman", "people", "thing").                                                                         |          |
|              | `reflexive`         | `string`                               | The reflexive form of the character's pronouns ("himself", "herself", "themselves", "itself").                                                         |          |
| `sex`        |                     | `object`                               | Properties pertaining to the character's biological sex.  **Note:** this does not include gender. This will be found in an upcoming `Sexuality` class. |          |
|              | `type`              | `'male'\|'female'\|'plural'\|'neuter'` | The biological sex of the character.                                                                                                                   | `'male'` |
