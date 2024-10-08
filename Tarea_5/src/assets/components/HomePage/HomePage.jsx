import React from "react"
import UserFetch from "../Fetch/UserFetch"

const HomePage = (props) => {

    const handleClick = () =>{

        props.setUser([])
    }

    const { id,name } = props.user

    return(
        <div>
            <h1>Bienvenido, {props.user[0]} </h1>
            <UserFetch id={id}/>
            <button onClick={handleClick}> Salir </button>

        </div>
    )
}

export default HomePage;