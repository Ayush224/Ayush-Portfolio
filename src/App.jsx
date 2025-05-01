import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NameContent from "./components/NameContent";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Scroll from "./components/Scroll";

function App() {
  return (
    <>
      <Scroll />
      <div className=" antialiased text-gray-300 selection:bg-blue-200 selection:text-gray-600">
        <div className="w-full h-full fixed top-0 z-[-2]">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <NameContent />
          <About />
          <Technologies />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
