import About from "./components/About";
import Experiences from "./components/Experiences";
import Header from "./layout/Header";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="relative text-black dark:text-white">
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      <div className="px-4">
        <div className="pt-16 md:pt-24 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
          <Presentation />
          <Experiences />
          <Projects />
          <About />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
