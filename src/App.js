import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Carousel from "./components/Carousel/Carousel";
import { SLIDE_DATA } from "./constants/slideData";


function App() {
  return (
    <main>
      <Carousel slides={SLIDE_DATA} />
    </main>
  );
}

export default App;
