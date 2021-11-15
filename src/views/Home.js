import Navbar from "../components/nav/Nav";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
