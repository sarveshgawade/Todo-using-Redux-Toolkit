import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    // initial elements inside the store
    todos: [
        // {id:1,text: 'Learn React'},{id:2,text: 'Learn Java  '}
    ]
}

export const todoSlice = createSlice({
    name: 'todo-list-element',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id : nanoid() ,
                text : action.payload
            }

            state.todos.push(newTodo)
        } ,
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todoItem) => todoItem.id !== action.payload)
        } 
        
    }
})

// we need to export individual functionality i.e reducers
export const {addTodo,removeTodo} = todoSlice.actions

// also we need to export reducers as it is for store
export default todoSlice.reducer

// NOTES
// action => current data passed to the function
// state => current state of data
