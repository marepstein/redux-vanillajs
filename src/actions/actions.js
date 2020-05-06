export const ADD_NOTE = 'ADD_NOTE'

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content }
}

// ---- this function is an action creator - it's job is to only return a plain object ----

// ----- NB: Actions define WHAT ------

// ------ we are exporting them as we will need them later, in other places ------
