# Structure

The `Character` class follows a top-down structure, with more specific subclasses nested inside more generalized
subclasses. For example, a `Toe` class would be found in the `Foot` class, which itself would be found in the `Leg`
class, and so on. The full structure (including properties) is as follows:

```
Character
∟ Physical
  ∟ Sex
    ∟ .type
  ∟ Build
    ∟ .height
    ∟ .muscles
    ∟ .type
    ∟ .weight
  ∟ Head
    ∟ Eyes
      ∟ .astigmatism
      ∟ .farsighted
      ∟ .colors
        ∟ .left
        ∟ .right
    ∟ Mouth
      ∟ Teeth
        ∟ .count
        ∟ .description
      ∟ Tongue
        ∟ .ageusia
        ∟ .description
    ∟ Nose
      ∟ .anosmia
      ∟ .description
    ∟ Neck
      ∟ .description
  ∟ Upper
    ∟ Chest
      ∟ .description
    ∟ Shoulders
      ∟ .description
    ∟ Arm
      ∟ .left
        ∟ .size
        ∟ Hand
          ∟ .description
          ∟ .fingers
      ∟ .right
        ∟ .size
        ∟ Hand
          ∟ .fingers
          ∟ .description
  ∟ Lower
    ∟ Crotch
      ∟ Butt
        ∟ .description
      ∟ Vagina
        ∟ .description
        ∟ Ovaries
          ∟ .fertile
      ∟ Penis
        ∟ .description
        ∟ Testicles
          ∟ .description
          ∟ .potent
    ∟ Leg
      ∟ .left
        ∟ .size
        ∟ Foot
          ∟ .toes
          ∟ .description
      ∟ .right
        ∟ .size
        ∟ Foot
          ∟ .toes
          ∟ .description
∟ Mental
  ∟ Background
    ∟ .birthplace
      ∟ .city
      ∟ .country
    ∟ .education
      ∟ .grade
      ∟ .length
      ∟ .school
    ∟ .occupation
      ∟ .type
      ∟ .income
      ∟ .length
  ∟ Speech
    ∟ .type
    ∟ .languages
  ∟ Personality
    ∟ .type
  ∟ Sexuality
    ∟ .drive
    ∟ .gender
    ∟ .attraction
      ∟ .female
      ∟ .male
  ∟ Relations
    ∟ .family
      ∟ .parents
      ∟ .siblings
  ∟ Skills
```

**Note:** Although the classes listed above are all capitalized, it is worth noting that they are referenced with
lowercase notation (e.g. `character.leg.foot` rather than `character.Leg.Foot`).

