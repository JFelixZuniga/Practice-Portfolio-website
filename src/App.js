import React, { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Cover } from "./components/cover/Cover";
import { Navbar } from "./components/navbar/Navbar";
import { Slider } from "./components/slider/Slider";

function App() {
  // Guardamos la posición de nuestro scroll
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  // Usamos useEffect para actualizar el valor de nuestro estado cada vez que hacemos scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
    </div>
  );
}

export default App;
