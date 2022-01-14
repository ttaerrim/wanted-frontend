import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Carousel from "./component/Carousel/Carousel";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Carousel />
    </BrowserRouter>
  );
}

export default App;
