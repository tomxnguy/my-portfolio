import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </Router>
  );
}

export default App;
