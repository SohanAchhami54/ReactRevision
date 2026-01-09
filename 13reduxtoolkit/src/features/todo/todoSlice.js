import { createSlice, nanoid } from "@reduxjs/toolkit"
const initialState={
    todos:[{id:1,text:'Todo1'}]
}
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),text:action.payload})
        },
        updateTodo:(state,action)=>{
           state.todos=state.todos.map(todo=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,updateTodo,deleteTodo}=todoSlice.actions
export const todoReducer=todoSlice.reducer


//this is the state.
// {
//   todos: [
//     { id: "someNanoId", text: "Redux Done" }
//   ]
// }


// function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'todo/addTodo':
//       return {
//         ...state,
//         todos: [...state.todos, { id: nanoid(), text: action.payload }]
//       }

//     case 'todo/deleteTodo':
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.payload)
//       }

//     case 'todo/updateTodo':
//       const { id, text } = action.payload
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === id ? { ...todo, text } : todo
//         )
//       }

//     default:
//       return state
//   }
// }



//this is the state in the redux store
// state = {
//   todos: [
//     { id: 1, text: "hello" },
//     { id: 2, text: "Buy milk" }
//   ]
// }
