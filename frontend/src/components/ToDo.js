import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

function ToDo({text,updateMode,deleteTodo}) {
  return (
    <div>
    <div className='todo flex justify-between p-4 text-lg bg-green-400'>
       <div> {text} </div>
       <div className='icons flex gap-3' >
          <BiEdit onClick={updateMode} className='text-blue-500'/>
          <AiFillDelete onClick={deleteTodo} className='text-red-500'/>
       </div>
    </div>
    </div>
  )
}

export default ToDo
