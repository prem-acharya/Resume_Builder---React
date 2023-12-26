import React from "react";
import ResumeEditor from "./pages/ResumeEditor";
// import About from "./pages/About";
import MainBody from "./pages/MainBody";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<MainBody />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/resume" element={<ResumeEditor />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
