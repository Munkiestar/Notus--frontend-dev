import "./App.scss";

import Loader from "./components/Loader/Loader";
import ImageSlider from "./components/Slider/Slider";
import ImageGallery from "./components/FixedGallery/ImageGallery";
import Map from "./components/GoogleMap/Map";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";

function App() {
  // state variables
  const [isLoading, setIsLoading] = useState(true);

  // setting a Loader to show for a 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ImageSlider />
          <ImageGallery />
          <Map />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
