import "./App.css";
import AboutSection from "./components/AboutSection";
import ExploreSection from "./components/ExploreSection";
import FaqSection from "./components/FaqSection";
import Form from "./components/Form";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyAknan from "./components/WhyAknan";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyAknan />
      <ServicesSection />
      <Form />
      <FaqSection />  
      <ExploreSection />
      <Footer />
    </>
  );
}

export default App;
