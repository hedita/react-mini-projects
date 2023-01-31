import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import InputTextHandler from "./InputTextHandler";
import CounterHandler from "./CounterHandler"

const App = () => {
  return (
    <>
      <InputHandler />
      <hr />
      <InputTextHandler />
      <hr />
      <CounterHandler />
      <hr />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
