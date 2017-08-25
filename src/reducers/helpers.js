import character_json from '../data/characters.json';

//Create all the object of character
export function createCharacter(id) {
  let character = character_json.find(c => c.id === id);
  return character;
}
