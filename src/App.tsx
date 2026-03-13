import TopBar from "./sections/TopBar";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Applications from "./sections/Applications";
import Products from "./sections/Products";
import News from "./sections/News";
import About from "./sections/About";
import Honors from "./sections/Honors";
import Partners from "./sections/Partners";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Applications />
        <Products />
        <About />
        <News />
        <Honors />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
