import "./App.scss";

import Loader from "./components/Loader/Loader";
import ImageSlider from "./components/Slider/Slider";
import ImageGallery from "./components/FixedGallery/ImageGallery";

import { useEffect, useState } from "react";
import Map from "./components/GoogleMap/Map";

function App() {
  // state variables
  const [isLoading, setIsLoading] = useState(false);

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
          <>
            <Map />
          </>
        </>
      )}
    </div>
  );
}

export default App;
