import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Highlights />
      <About />
      <Footer />
    </>
  );
}

export default App;
