import About from "./components/About";
import Contact from "./components/Contact";
import Heroimg from "./components/Heroimg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <Heroimg />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
