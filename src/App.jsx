import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import InputTextHandler from "./InputTextHandler";

const App = () =>  {
  return (
    <>
      <InputHandler />
      <hr />
      <InputTextHandler />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)