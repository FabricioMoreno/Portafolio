import React from "react";

//My components
import Navbar from "../components/Navbar";
import Portafolio from "../components/Portafolio";

const HomePage = () => {
  return (
    <div className="homePage">
      <Navbar />
      <Portafolio />
    </div>
  );
};


export default HomePage