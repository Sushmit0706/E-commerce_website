import React from "react";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import Teampage from "../components/Teampage";

const Team = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={` ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Teampage />
      <Footer />
    </div>
  );
};

export default Team;
