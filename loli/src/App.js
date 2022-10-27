import { useState, useEffect } from "react";
import Login from "./components/Login";
import "./App.css";
import axios from 'axios'
import Menu from "./components/Menu";



function App() {

  const [login, setlogin] = useState("");
  const [session, setSession] = useState("");

  console.log(`El valor de login  ⟢ ⊱⊱ ⟢ ${login}`);

  const loginContainer = () => {
    return <Login login={login} setlogin={setlogin} />;
  };

 
  const menu = () => {
    return <Menu />

  };



  return <div className="container">
    {!window.sessionStorage.getItem('loggedAppUser') && loginContainer()}
    {window.sessionStorage.getItem('loggedAppUser') && menu()}
    </div>;
}

export default App;