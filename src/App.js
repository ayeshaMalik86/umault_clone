import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Preloader from "./components/Preloader"; // Import Preloader

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure animation runs on every refresh
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<HomePage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
