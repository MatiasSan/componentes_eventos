import { useState } from "react";
import './App.css';
import Alert from "./components/Alert/Alert.jsx"
import Login from "./components/Login/Login.jsx"

function App() {

  const [isValid, setIsvalid] = useState()
  const handlerSubimtResult = (e) => {
    alert(e)
  }

  return (
    <div className="App">
        <h1>Inicio de Sesión</h1>
        <Login onSubmitForm={(e)=> handlerSubimtResult(e)} />

  
        <Alert text={isValid ? "Coincide" : "No Coincide"} variant={isValid ? "success" : "danger"} />
    </div>
  );
}

export default App;
