import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Todo({ task, deleteTodo, editTodo }) {
    return (
        <div className='flex justify-between items-center odd:bg-red-800 even:bg-green-800 text-white py-3 px-4 rounded-md  cursor-pointer m-auto mb-4 w-[300px]'>
            <p className='font-primary'>{task.task}</p>
            <div className='flex items-center gap-x-4'>
                <EditIcon className="text-xl" onClick={() => editTodo(task.id)} />
                <DeleteIcon className="text-xl" onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo