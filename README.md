
# character-maker

This site aims to help you create new characters for your next novel, story, game, TV show, etc.

[![Issues](https://img.shields.io/github/issues/dsoloha/character-maker)](https://github.com/dsoloha/character-maker/issues)
[![Stars](https://img.shields.io/github/stars/dsoloha/character-maker)](https://github.com/dsoloha/character-maker/stargazers)
[![ISC License](https://img.shields.io/github/license/dsoloha/character-maker)](https://opensource.org/licenses/ISC)

## Usage/Examples

```javascript
import Character from 'character-maker'

const character = new Character()

// or optionally with parameters:

const character = new Character({
    name: {
        first: 'John',
        last: 'Smith',
    }
})
```

All parameters available can be found [here](https://dsoloha.github.io/character-maker/).

## API Reference

All parameters are optional.

The following properties are available on an instance of the `Character` class:

- `.age`
- `.arms`
- `.background`
- `.build`
- `.chest`
- `.crotch`
- `.eyes`
- `.foot`
- `.hair`
- `.hand`
- `.health`
- `.height`
- `.legs`
- `.mouth`
- `.muscles`
- `.name`
- `.neck`
- `.nose`
- `.pronouns`
- `.sex`
- `.sexuality`
- `.shoulders`
- `.skin`
- `.speech`
- `.stomach`
- `.waist`
- `.weight`

View all sub-properties and more documentation [here](https://dsoloha.github.io/character-maker/).

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.
