import Character from "./src/classes/Character";

export function generate() {
  const character = new Character();

  return character;
}

const characterMaker = {
  generate,
};

export default characterMaker;
