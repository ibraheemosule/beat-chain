import "../assets/scss/home/home.scss"
import Navbar from "../components/nav/Nav";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Footer/>
    </div>
  );
};

export default Home;
