// import HeroSection from './components/Hero/HeroSection'
import Navbar from "./components/Navbar/NavBar";
import SpeakerSection from "./components/Speakers/SpeakerSection";
import Contact from "./components/Contact/Contact";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Navbar> </Navbar>
      <Home/>
      {/* <HeroSection></HeroSection> */}
      <SpeakerSection></SpeakerSection>
      <Faq />
      <Contact></Contact>

      <Footer />
    </>
  );
}

export default App;
