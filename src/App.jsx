import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import CounterHandler from "./CounterHandler";

const App = () =>  {
  return (
    <>
    <InputHandler />
    <hr />
    <CounterHandler />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)