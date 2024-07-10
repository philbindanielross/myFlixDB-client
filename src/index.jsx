import { createRoot } from "react-dom/client";
import "./index.scss";

const MyFlixApplication = () => {
  return <div>Good morning, movie lovers!</div>;
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
