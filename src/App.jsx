import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Middle from "./components/Middle/Middle";
import Destnation from "./components/destnation/Destnation";
import Portifolio from "./components/Portifolio/Portifolio";
import Services from "./components/Services/Services";
import "./App.css";
import Bannar from "./components/bannar/Bannar";

function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <Middle />
      <Destnation />
      <Portifolio />
      <Services />
      <Bannar />
      <Footer />
    </>
  );
}

export default App;
