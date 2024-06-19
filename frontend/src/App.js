import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addTodo, getAllToDo ,updateToDo , deleteToDo } from "./utils/HandleApi";

function App() {

  const [toDo , setToDo] = useState([])
  const [text , setText] =  useState("")
  const [isUpdating , setIsUpdating] = useState(false)
  const [toDoId , setToDoId] = useState("")

useEffect(() => {
  getAllToDo(setToDo)
},[])

const updateMode = (_id , text) => {
   setIsUpdating(true)
   setText(text)
   setToDoId(_id)
}
  return (
    <div className="App">
      <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
        </div>

        <div className="flex items-center border-b-2 p-5 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={text}
            onChange={(e)=> setText(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={isUpdating ? 
            ()=>updateToDo(toDoId,text,setText,setToDo,setIsUpdating) :
            ()=>addTodo(text,setText,setToDo)}
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>

        <div className="flex flex-col gap-3 my-2 xs:m-2">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode={()=> updateMode(item._id , item.text)}
          deleteTodo={()=> deleteToDo(item._id , setToDo)}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
