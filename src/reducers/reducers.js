import { ADD_NOTE } from '../actions/actions'

const initialState = {
  notes: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      }
    // this assumes the notes property is the only property of the apps new state, and if there were others, they would be lost
    default:
      return state
    // return our app state when all cases are exhausted - this is to do with Redux initialization
  }
}

export default rootReducer

/** NOTES **/

// ---- inital state object is the state of the entire app, as there is only reducer ----
// ---- reducers receive TWO parameters; prev state and the action being dispatched ----
/**  The function is checking what the action type is and depending on its value, we are returning the new state. **/

// ---- if we had other states, we would use a spread operator (...states,) before or after the notes property ----
