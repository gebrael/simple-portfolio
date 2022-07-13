import "./App.css";
import Nav from "./Components/Nav/nav";
import Home from "./Components/Home/home";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/footer/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
