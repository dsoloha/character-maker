import Age from "./Age";
import Background from "./Background";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Name from "./Name";
import Pronouns from "./Pronouns";
import Sex from "./Sex";

export default class Character {
  age: Age;
  background: Background;
  eyes: Eyes;
  hair: Hair;
  name: Name;
  pronouns: Pronouns;
  sex: Sex;

  constructor() {
    this.age = new Age();
    this.background = new Background();
    this.eyes = new Eyes();
    this.hair = new Hair();
    this.name = new Name();
    this.pronouns = new Pronouns(this);
    this.sex = new Sex();
  }
}
