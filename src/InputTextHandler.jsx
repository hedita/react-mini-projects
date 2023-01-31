import React, { useState, useEffect } from "react";

function InputTextHandler() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (text.length < 5) {
      setMessage("TOO SHORT!");
    } else if (text.length > 10) {
      setMessage("TOO LONG!");
    } else {
      setMessage("");
    }
  }, [text]);
  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {message}
    </>
  );
}
export default InputTextHandler;
