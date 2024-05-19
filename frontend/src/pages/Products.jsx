import React from 'react'
import { useState } from "react";
import { Footer, Navbar, Product } from "../components"

const Products = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className={` ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Product />
      <Footer />
    </div>
  );
}

export default Products