import { Assessment } from "./components/Assessment";
import { AudiGallery } from "./components/AudiGallery";
import { AudiWorld } from "./components/AudiWorld";
import { Discover } from "./components/Discover";
import { Football } from "./components/Football";
import { Footer } from "./components/Footer";
import { Future } from "./components/Future";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <AudiWorld />
      <AudiGallery />
      <Future />
      <Assessment />
      <Football />
      <Discover />
      {/* Country */}
      <Footer />
    </main>
  );
}

export default App;
