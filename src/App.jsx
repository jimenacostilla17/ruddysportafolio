import Hero from "./components/Hero";
import Historia from "./components/Historia";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import SeccionPedir from "./components/SeccionPedir";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <Menu />
      <Historia/>
      <SeccionPedir/>
      <Footer/>
    </div>
  );
}

export default App;