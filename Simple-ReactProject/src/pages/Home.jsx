import HeroSection from "../components/HeroSection"
import Clients from "../components/Clients"
import Overview from "../components/Overview";
import Design from "../components/Design"

function Home() {
  return (
    <div>
      < HeroSection />

      <Clients/>

      <Overview/>

      <Design/>
    </div>
  );
}

export default Home;