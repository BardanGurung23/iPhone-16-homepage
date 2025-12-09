import Hero from "./assets/components/hero.jsx";
import Navbar from "./assets/components/navbar.jsx";
import Highlights from "./assets/components/Highlights.jsx";
import Model from "./assets/components/Model.jsx";
import Appleai from "./assets/components/Appleai.jsx";
import Feature from "./assets/components/Feature.jsx";
import Footer from "./assets/components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="custom-gradient w-full h-[100vh]">
        <Navbar />
        <Hero />
      </div>
      <Highlights />
      <Model />
      <Appleai />
      <Feature />
      <Footer />
    </>
  );
};

export default App;
