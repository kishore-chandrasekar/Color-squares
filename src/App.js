import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";


function App() {
  
  const [input, setinput] = useState("");
  function getnum(val) {
    val.preventDefault();

    setinput();
  }

  return (
    <>
      <div className="App">
        <div className="form">
          <form className="num" onSubmit={getnum}>
            <input
              type="number"
              placeholder="Type a Number to see a magic"
              value={input}
              onChange={(e) => setinput((e.target.value))}
              className="number"
            ></input>

          </form>
        </div>
        <div className="shades">
          {!isNaN(input) &&
            parseInt(input, 10) > 0 &&
            Array(parseInt(input, 10))
              .fill()
              .map((_, idx) => (

                

                <div key={idx} className="redshades" style={{ backgroundColor: `rgb(255, ${ Math.floor(Math.random()*200)},${ Math.floor(Math.random()*120)})`}} >{idx}</div>
                
               
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
