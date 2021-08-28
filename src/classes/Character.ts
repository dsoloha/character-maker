import { ICharacter } from "../../types/character";
import Age from "./Age";
import Background from "./Background";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Name from "./Name";
import Sex from "./Sex";

export default class Character implements ICharacter {
  age: Age;
  background: Background;
  eyes: Eyes;
  hair: Hair;
  name: Name;
  sex: Sex;

  constructor() {
    this.age = new Age();
    this.background = new Background();
    this.eyes = new Eyes();
    this.hair = new Hair();
    this.name = new Name();
    this.sex = new Sex();
  }
}
