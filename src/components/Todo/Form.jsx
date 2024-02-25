"use client"
import React, { useState } from 'react'

function Form({ createTodo }) {
    const [value, setValue] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }
    return (
        <form className='mb-4 font-primary w-full text-center' onSubmit={HandleSubmit}>
            <input type="text" className='border-gray-500 outline-none bg-transparent border p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300'
                placeholder='What task do you have today?'
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button className=' bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2'>
                Add Task
            </button>
        </form>
    )
}

export default Form