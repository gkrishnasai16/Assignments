import { combineReducers } from 'redux'
import { ADD_TODO } from '../actions/actions'

function todo(state, action) {
   console.log("ACTION TYPE IN TODO REDUCER"+action.type)
   switch (action.type) {
   
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
         
      default:
      return state
   }
}

function todos(state = [], action) {
   console.log("ACTION TYPE IN TODOS"+action.type)
   switch (action.type) {
   
      case ADD_TODO:
         return [
            ...state,
            todo(undefined, action)
         ]
         
      default:
      return state
   }
}

const todoApp = combineReducers({
   todos
})

export default todoApp