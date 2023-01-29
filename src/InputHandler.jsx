import React, { useState } from "react";

function InputHandler() {
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
  
  export default InputHandler;