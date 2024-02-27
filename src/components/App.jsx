import React, { useState } from "react";

function App() {
    const [heading, setHeading] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);

    function mouseOver(event){

        console.log("ho gya");
    }
    function click(event){
        setHeading("Submitted");
    }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default App;
