import { useContext } from "react";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Productlist from "./components/ProductList/Productlist";
import Toggle from "./components/Toggle/Toggle";
import About from "./components/about/About";
import { ThemeContext } from "./context";


function App() {

  const theme=  useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div style={{backgroundColor:darkmode? "black" : "white" ,
    color:darkmode? "white": "black" }}>
      <Toggle/>
      <Intro/>
      <About/>
      <Productlist/>
      <Contact/>
     
    </div>
  );
}

export default App;
