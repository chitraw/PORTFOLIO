import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.js/LandingPage";
import Navbar from "./LandingPage.js/Navbar";
import SideBar from "./LandingPage.js/SideBar";
import Intro from "./LandingPage.js/Intro";
import Skills from "./LandingPage.js/Skills";
import Education from "./LandingPage.js/Education";
import Experience from "./LandingPage.js/Experience";
import Contact from "./LandingPage.js/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
