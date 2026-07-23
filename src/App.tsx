import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Output } from "./components/Output";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Career />
        <Work />
        <Skills />
        <Output />
      </main>
      <Footer />
    </>
  );
}
