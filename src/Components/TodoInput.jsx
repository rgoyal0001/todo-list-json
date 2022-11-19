import React from "react";
import { useState } from "react";
export const TodoInput=()=>{
    const [title,setTitle]=useState('')
    const [status,setStatus]=useState(false)
    function handleSubmit(){
        // console.log('yes')
        // console.log(title)
        const todo={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title:title,status:status})
        }
        fetch(`http://localhost:3000/tasks`,todo)
    }

    return (
        <>
            <input type="text" placeholder="enter todo" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="checkbox" defaultChecked={status} onChange={()=>setStatus(!status)} />
            <br />
            <button onClick={handleSubmit}>add</button>
        </>
    )
}