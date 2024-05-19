// import { Navbar, Main, Product, Footer } from "../components";
// import { useState } from "react";
// import "../index.css";

// function Home() {
//   const [theme, setTheme] = useState("light");
//   return (
//     <div className={` ${theme}`}>
//       <Navbar theme={theme} setTheme={setTheme} />
//       <Main />
//       <Product />
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import { Navbar, Main, Product, Footer } from "../components";
import { useState } from "react";
import "../index.css";

function Home() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`background-image ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Main />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
