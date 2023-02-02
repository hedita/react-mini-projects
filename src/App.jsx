import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import InputTextHandler from "./InputTextHandler";
import CounterHandler from "./CounterHandler";
import LampHandler from "./LampHandler";
import ToggleHandler from "./ToggleHandler";

const App = () => {
  return (
    <>
      <InputHandler />
      <hr />
      <InputTextHandler />
      <hr />
      <CounterHandler />
      <hr />
      <LampHandler />
      <hr />
      <ToggleHandler />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
