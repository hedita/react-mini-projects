import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import InputTextHandler from "./InputTextHandler";
import CounterHandler from "./CounterHandler";
import LampHandler from "./LampHandler";
import { ToggleHandler0, ToggleHandler1,ToggleHandler2,ToggleHandler3,ToggleHandler4,ToggleHandler5,ToggleHandler6,ToggleHandler7,ToggleHandler8,ToggleHandler9,ToggleHandler10 } from "./ToggleHandler";

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
      <ToggleHandler0 />
      <br />
      <ToggleHandler1 />
      <br />
      <ToggleHandler2 />
      <br />
      <ToggleHandler3 />
      <br />
      <ToggleHandler4 />
      <br />
      <ToggleHandler5 />
      <br />
      <ToggleHandler6 />
      <br />
      <ToggleHandler7 />
      <br />
      <ToggleHandler8 />
      <br />
      <ToggleHandler9 />
      <br />
      <ToggleHandler10 />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
