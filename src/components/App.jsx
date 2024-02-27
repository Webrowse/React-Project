import React, { useState } from "react";

function App() {
    const [heading, setHeading] = useState("Hello");
    
    function mouseOver(event){
        setHeading("Waah");
        console.log("ho gya");
    }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={mouseOver}>Submit</button>
    </div>
  );
}

export default App;
