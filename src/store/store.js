import { createStore } from 'redux'
import rootReducer from '../reducers/reducers'

export default createStore(rootReducer)

/** createStore: clearly creates the apps store (remember, redux apps only have ONE store from ONE reducer (the rootReducer, which can have many states) **/
