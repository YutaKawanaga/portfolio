import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Career } from "./components/Career";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Output } from "./components/Output";

export function App() {
  // スクロールで各セクションをフワッと出す。IntersectionObserver で一度だけ .is-in を付与。
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    if (!("IntersectionObserver" in window)) {
      sections.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
    </>
  );
}
