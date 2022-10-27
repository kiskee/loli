import { useState } from "react";
import Login from "./components/Login";
import "./App.css";
import axios from 'axios'

function App() {


  const [login, setlogin] = useState("");

  console.log(`El valor de login  ⟢ ⊱⊱ ⟢ ${login}`);

  const loginContainer = () => {
    return <Login login={login} setlogin={setlogin} />;
  };

  const menu = () => {
    return "<h3>Hola<h3/>";
  };

  return <div className="container">
    {login==="" && loginContainer()}
    {login!=="" && menu()}
    </div>;
}

export default App;