import character_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';

//List the characters objects 
function characters(state = character_json, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default characters;