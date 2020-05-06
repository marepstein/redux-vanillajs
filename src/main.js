import store from './store/store'
import { addNote } from './actions/actions'

// We use store.getState() to get our app state from the store

console.log('Before:', store.getState())
store.dispatch(addNote('One', 'One content'))
store.dispatch(addNote('Two', 'Two content'))
store.dispatch(addNote('Three', 'Three content'))
console.log('After:', store.getState())

let notesUList = document.getElementById('notes')
let addNoteForm = document.getElementById('add-note')
let addNoteTitle = addNoteForm['title']
let addNoteContent = addNoteForm['content']

// --------- Redux  ---------

function deleteNote(index) {
  console.log(index)
}

function renderNotes() {
  setDeleteNoteButtonsEventListeners()
}

// --------- Event Listeners  ---------

addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let title = addNoteTitle.value
  let content = addNoteContent.value
  store.dispatch(addNote(title, content))
  // This dispatches an action to our store!
  // Our action creator object returns an object with the title and content values we are feeding it, which are the content we put into our form fields.
})

function setDeleteNoteButtonsEventListeners() {
  const buttons = document.querySelectorAll('ul#notes li button')

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id)
    })
  }
}

// ------ Render the initial Notes ------

renderNotes()
