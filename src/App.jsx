import React, { useState} from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [text,setText] = useState("");
  return (
    <div>
      <input onChange={(e)=> {
      setText(e.target.value)
      }} />
      <p>{text}</p>
    </div>
    )
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />)