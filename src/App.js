import "./App.css";

import Loader from "./Loader/Loader";
import ImageSlider from "./Slider/Slider";
import ImageGallery from "./FixedGallery/ImageGallery";

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
        </>
      )}
    </div>
  );
}

export default App;
