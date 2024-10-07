import React, { useState } from "react"
import './App.css';

import LoginForm from "./assets/components/Login/LoginForm";
import HomePage from "./assets/components/HomePage/HomePage";

const App = () =>{

    const [user, setUser] = useState([])

    return(
        <div>
            {
              user.length === 0 ? 
              <LoginForm setUser={setUser}/>
              : <HomePage user={user} setUser={setUser}/>
            }
        </div>
    )

}

export default App