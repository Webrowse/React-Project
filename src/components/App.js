import React , {useState} from "react";

function App(){
    const [greeting, clickhappened] = useState("Click Please");
    function clicked(){
        console.log("I Got Clicked");
        clickhappened("Thanks for clicking");
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <input type="text" placeholder="Click down" />
            <br />
            <button type="button" onClick = {clicked} className="click">Click Me!</button>
  
        </div>
    )
}

export default App;
