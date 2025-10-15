import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Credits from "./page/Credits";
import Watch from "./page/Watch";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
      {location.pathname === "/" ? (
        <div className="mt-[-50px] ">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
