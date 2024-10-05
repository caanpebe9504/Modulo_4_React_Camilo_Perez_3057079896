import react, { useState } from "react"

import './App.css'

import FormComponent from "./assets/form-component/formComponent"
import HomePage from "./assets/page/homePage"

const App = () => {

    const [name, setName] = useState("")

    const submitHanlder = (event) => {
        
        event.preventDefault()
    }

    return(
        
        <div>
            
        </div>
    )
}

export default App