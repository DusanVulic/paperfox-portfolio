import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

//
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import VectorArt from "./components/VectorArt";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Banner />
      <Projects />
      <Banner />
      <VectorArt />
      <Banner />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
