import "./App.css";

import Loader from "./Loader/Loader";
import { useState } from "react";

function App() {
  // state variables
  const [isLoading, setIsLoading] = useState(false);

  return <div className="app">{isLoading && <Loader />}</div>;
}

export default App;
