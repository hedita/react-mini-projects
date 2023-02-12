import ReactDOM from "react-dom/client";
import InputHandler from "./InputHandler";
import InputTextHandler from "./InputTextHandler";
import CounterHandler from "./CounterHandler";
import LampHandler from "./LampHandler";
import FaceMood from "./FaceMood";
import Boxes from "./Boxes";
import Posts from "./Posts";

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
      <Posts />
      <hr />
      <Boxes />
      <hr />
      <FaceMood />
      <hr />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
