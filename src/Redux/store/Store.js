//import create store
import {createStore} from 'redux'

//import reducer
import TodoReducer from '../reducers/TodoReducer'


//creation store
const store = createStore(TodoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store