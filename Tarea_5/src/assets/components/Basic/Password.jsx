import React from "react"

const Password  = ({password, setPassword}) => (

    <input 

        type="text" 
        value={password}
        placeholder="Escribe tu contraseña: "
        onChange = {(p) => setPassword(p.target.value)}
        
    />
)

export default Password