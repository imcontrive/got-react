import { ADD_BOOKS, ADD_CHARACTERS, ADD_HOUSES } from "./types";

const initState = {
  books: [],
  characters: [],
  houses: []
}

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books: action.payload
      }
    case ADD_CHARACTERS:
      return {
        ...state,
        userData: action.payload
      }

    case ADD_HOUSES:
      return {
        ...state,
        houses: action.payload
      }

    default:
      return state;
  }
}
