import HeroSection from "../components/HeroSection"
import Clients from "../components/Clients"
import Overview from "../components/Overview";
import Design from "../components/Design"
import Smith from "../components/Smith"
import Article from "../components/Article"


function Home() {
  return (
    <div>
      < HeroSection />

      <Clients/>

      <Overview/>

      <Design/>

      <Smith/>

      <Article/>
    </div>
  );
}

export default Home;
