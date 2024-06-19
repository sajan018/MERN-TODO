import React from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

function ToDo({text,updateMode,deleteTodo}) {
  return (
    <div>
    <div className='todo flex justify-between p-4 text-lg bg-yellow-400'>
       <div className='font-semibold text-gray-900 text-xl'> {text} </div>
       <div className='icons flex gap-3' >
          <CiEdit onClick={updateMode} className='text-gray-900 hover:opacity-70'/>
         < AiOutlineDelete onClick={deleteTodo} className='text-red-700 hover:opacity-70'/>
       </div>
    </div>
    </div>
  )
}

export default ToDo
