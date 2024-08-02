import { createRoot } from "react-dom/client";
import { MainView } from "./components/mainView/mainView";

import "./index.scss";
import { Container } from "react-bootstrap";

const MyFlixApplication = () => {
  return (
    <Container
      className="d-flex flex-row justify-content-center align-items-center 
    vh-100 mainContainer"
    >
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
