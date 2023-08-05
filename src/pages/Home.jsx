import { useState } from "react";
import AboutUs from "../components/Home/AboutUs";
import Buttons from "../components/Home/Buttons";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Houses from "../components/Home/Houses";
import Navbar from "../components/Navbar";
import data from "../components/data";
import DreamHome from "../components/Home/DreamHome";
import BackToTopButton from "../components/BackToTopButton";
import OtherProjects from "../components/Home/OtherProjects";
import Neighborhood from "../components/Neighborhood";



function Home() {
  const [houses, setHouses] = useState(data)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Buttons setHouses={setHouses} />
      <Houses houses={houses}/>
      <Neighborhood/>
      <AboutUs/>
      <OtherProjects/>
      <DreamHome/>
      <Footer/>
      <BackToTopButton />
    </div>
  );
}

export default Home;
