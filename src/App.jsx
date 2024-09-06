import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const [isToggled, setIsToggled] = useState(false);


  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      {show ? <h2>Hellooo React User!!!</h2> : null}
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      <button
        onClick={handleToggle}
        style={{
          backgroundColor: isToggled ? "green" : "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {isToggled ? "ON" : "OFF"}
      </button>

      <p>The button is {isToggled ? "ON" : "OFF"}</p>
    </>
  )
}

export default App
