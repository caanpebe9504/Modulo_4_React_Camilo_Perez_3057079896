import React from "react"

const Username = ({name, setName}) => (

    <input 

        type="text" 
        value={name}
        placeholder="Escribe tu usuario: "
        onChange={(u) => setName(u.target.value)}
    />
)

export default Username;