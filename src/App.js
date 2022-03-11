import { BrowserRouter } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Carousel from "./component/Carousel";
import data from "./assets/data.json";
import { Reset } from "styled-reset";
function App() {
  const d = data.data;
  // d.map((data) => console.log(data.image));
  return (
    <BrowserRouter>
      <Reset />
      <Navigation />
      <Carousel />
    </BrowserRouter>
  );
}

export default App;
