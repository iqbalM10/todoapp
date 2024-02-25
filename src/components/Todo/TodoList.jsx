"use client"
import React, { useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4()

function TodoList() {
    const [todoValue, setTodoValue] = useState([])
    const createTodo = todo => {
        setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
    }

    const deleteTodo = id => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div className='container bg-blue-950 mt-20 p-8 rounded-md'>
            <Form createTodo={createTodo} />

            {
                todoValue.map((todo, i) => (
                    todo.isEditing ? (
                        <Edit key={i} editTodo={editTask} task={todo} />
                    ) : (

                        <Todo task={todo} key={i} deleteTodo={deleteTodo} editTodo={editTodo} />)
                )
                )
            }
        </div>
    )
}

export default TodoList