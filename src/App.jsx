import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";

const App = () =>  {
  return (
    <InputHandler />
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)