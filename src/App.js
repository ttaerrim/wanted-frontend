import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Carousel from "./component/Carousel";
import data from "./assets/data.json";
function App() {
  const d = data.data;
  // d.map((data) => console.log(data.image));
  return (
    <BrowserRouter>
      <Navigation />
      <Carousel />
    </BrowserRouter>
  );
}

export default App;
