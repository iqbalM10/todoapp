"use client"
import React, { useState } from 'react'

function Edit({ editTodo, task }) {
    const [value, setValue] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('')
    }
    return (
        <form className='mb-4 font-primary w-full text-center' onSubmit={HandleSubmit}>
            <input type="text" className='border-gray-500 outline-none bg-transparent border p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
                placeholder='Update Task'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button className=' bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2'>
                Update Task
            </button>
        </form>
    )
}

export default Edit