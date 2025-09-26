import About from "components/BusinessComponent/About";
import Feature from "components/BusinessComponent/Feature";
import Footer from "components/BusinessComponent/Footer";
import Hero from "components/BusinessComponent/Hero";
import Navbar from "components/BusinessComponent/Navbar";
import Service from "components/BusinessComponent/service";
import Trust from "components/BusinessComponent/trust";

export default function BusinessPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="py-7">
        <About />
      </div>
      <Service />
      <Trust />
      <Feature />
      <Footer />
    </div>
  );
}
