import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm (){
  const [todo,setTodo]=useState("");
  const {addTodo}=useTodo();
  const add=(e)=>{
    e.preventDefault()
    if(!todo) return 
    //as todo:todo = todo, only
    addTodo({todo,completed:false})
    setTodo("")
  }
    return (
        <form onSubmit={add}>
            <input type="text"
            placeholder="write todo"
            className="border-2 rounded-lg text-black" 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button className="px-2 bg-amber-300 rounded-lg">Add</button>
        </form>
        
    )
}
export default TodoForm;