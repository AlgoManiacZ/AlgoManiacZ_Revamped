import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/NavBar";
import SpeakerSection from "./components/Speakers/SpeakerSection";
import Contact from "./components/Contact/Contact";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Layout from "./components/ScrollToTop/scrollToTop"

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <HeroSection />
      <SpeakerSection />
      <Faq />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
