import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Landing = () => {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Sidebar isopen={isopen.toString()} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
    </>
  );
};

export default Landing;
