import React from "react";
import { Route, Routes } from "react-router-dom";

//My pages
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
