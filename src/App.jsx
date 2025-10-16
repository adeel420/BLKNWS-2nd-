import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Credits from "./page/Credits";
import Watch from "./page/Watch";
import Privacy_Policy from "./page/Privacy_Policy";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
      </Routes>
      {location.pathname === "/" ? (
        <div className="mt-[-350px] md:mt-0 ">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
