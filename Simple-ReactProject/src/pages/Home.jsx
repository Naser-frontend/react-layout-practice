import HeroSection from "../components/HeroSection"
import Clients from "../components/Clients"
import Overview from "../components/Overview";
import Design from "../components/Design"
import Smith from "../components/Smith"


function Home() {
  return (
    <div>
      < HeroSection />

      <Clients/>

      <Overview/>

      <Design/>

      <Smith/>
    </div>
  );
}

export default Home;