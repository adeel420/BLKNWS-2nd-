import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Credits from "./page/Credits";
import Watch from "./page/Watch";
import Privacy_Policy from "./page/Privacy_Policy";
import RSVP from "./page/RSVP";
import Community from "./page/Community";
import FooterWrapper from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <FooterWrapper />
      {/* <Footer /> */}
    </>
  );
}

export default App;
