import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Credits from "./page/Credits";
import Watch from "./page/Watch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
