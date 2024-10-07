import React from "react"

const Id = ({id, setId}) => (

    <input 

        type="text" 
        value= {id}
        placeholder="Escribe tu ID: "
        onChange={(i) => setId(i.target.value)}
    />
)

export default Id