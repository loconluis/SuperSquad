import { combineReducers } from 'redux';

import characters from './character'
import heroes from './heroes'

//Combine Reducer Function to Export
const rootReducer = combineReducers({
  characters,
  heroes,
})

export default rootReducer;