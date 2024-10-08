import React, { useState } from "react"

import Username from "../Basic/Username"
import Password from "../Basic/Password"
import Id from "../Basic/Id"

import HomePage from "../HomePage/HomePage"

const LoginForm = (props) =>{ 

    const [ id, setId] = useState("")
    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event) =>{
        
        event.preventDefault();

        if(name === "" || password === "" || id === ""){
            setError("Por favor, ingresa tu Id, usuario y contraseña.")
        }else{
            setError("")
            props.setUser({id, name})
        }
    }

    return(

        <div>
            <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    
                    <Id id={id} setId={setId}/>
                    <Username username={name} setName={setName}/>
                    <Password password={password} setPassword={setPassword}/>

                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Iniciar sesión</button>
                </form>
        </div>
    )
}

export default LoginForm;

