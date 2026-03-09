import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Services } from "./components/Services";
import { Focus } from "./components/Focus";
import { Footer } from "./components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Focus />
      </main>
      <Footer />
    </div>
  );
}
