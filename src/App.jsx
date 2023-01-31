import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import CounterHandler from "./CounterHandler";
import LampHandler from "./LampHandler";

const App = () => {
  return (
    <>
      <InputHandler />
      <hr />
      <CounterHandler />
      <hr />
      <LampHandler />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
