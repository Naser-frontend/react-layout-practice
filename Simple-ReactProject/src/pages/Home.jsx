import HeroSection from "../components/HeroSection"
import Clients from "../components/Clients"
import Overview from "../components/Overview";

function Home() {
  return (
    <div>
      < HeroSection />

      <Clients/>

      <Overview/>
    </div>
  );
}

export default Home;