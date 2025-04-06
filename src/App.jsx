import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Product from "./Components/Product";
import Banner from "./Components/Banner";
import Suscribe from "./Components/Suscribe";
import Testomonials from "./Components/Testomonials";
import SecurityFacilities from "./Components/SecurityFacilities";
import SecurityServicesSlider from "./Components/SecurityServicesSlider";

import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-white">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Main handleOrderPopup={handleOrderPopup} />
      <Product />
      <Banner />
      <Suscribe />
      <Testomonials />
      <SecurityServicesSlider />
      <SecurityFacilities />
      <Footer />
    </div>
  );
}

export default App;
