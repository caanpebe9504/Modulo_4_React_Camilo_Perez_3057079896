import React, { useState } from "react";
import './App.css'
import HomePage from "../page/homePage"

const FormComponent = (props) => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()

        if(name === "" && password === ""){
            setError(true)
        }else{
            setError(False)
            props.setUser([name])
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Nombre</p>
                <input onChange ={(e) => setName(e.target.value)
                } />
            </form>
        </div>
    )
}

