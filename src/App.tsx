import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Work } from "./components/work";
import { Capabilities } from "./components/capabilities";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Clients } from "./components/clients";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Work />
      <Capabilities />
      <About />
      <Contact />
    </main>
  );
}