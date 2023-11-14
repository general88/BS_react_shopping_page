import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar1 from "./assets/components/navbar/Navbar1";
import Heading from "./assets/components/heading/Heading";
import Cards from "./assets/components/cards/Cards";
import Forms from "./assets/components/forms/Forms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar1 />
      <Heading />
      <Cards />
      <Forms />
    </>
  );
}

export default App;
