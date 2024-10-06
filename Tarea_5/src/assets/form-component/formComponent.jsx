import React, { useState } from "react";
import HomePage from "../page/homePage"

const FormComponent = (props) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    const [error, setError] = useState("")

    const handleSubmit = (event) =>{

        event.preventDefault()

        if(name.trim() === "" && password.trim() === "" && id.trim() === ""){
            setError("Ingresa tu id, nombre y contraseña.")
        }else{
            setError("")
            props.setUser([name])
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    value={id}
                    placeholder="Escribe tu ID:"
                    onChange={(i)=> setId(i.target.value)}
                />

                <input 
                    typeof="text" 
                    value={name} 
                    placeholder="Escribe tu nombre de usuario:"
                    onChange ={(n) => setName(n.target.value)} 
                />

                <input 
                    type="password"
                    value = {password}
                    placeholder = "Escribe tu contraseña:"
                    onChange={(p) => setPassword(p.target.value)}
                />

                {error && <p> {error}</p>}
                
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default FormComponent
