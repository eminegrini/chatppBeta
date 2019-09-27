// //initial state
import initialState from './initialState'
import {
  ADD_USER
} from './const';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        user: action.payload
      }
    }

    default:
      return state
  }
}
