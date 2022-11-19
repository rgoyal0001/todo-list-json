import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const TodoList=()=>{
    const [todos,setTodos]=useState([])
    async function getTodos(){
        const res= await fetch(`http://localhost:3000/tasks`)
        const data=await res.json()
        setTodos(data)
    }
    useEffect(()=>{
        getTodos()
    },[])

    function handleDelete(id){
        fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' })
    }
    return (
        <>
            {
                todos.map((todo)=>{
                    return(
                        <div key={todo.id}>
                            <p style={{color:todo.status?'green':'red'}}>{todo.title}</p>
                            <button onClick={handleDelete(todo.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}