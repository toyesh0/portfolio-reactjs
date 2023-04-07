import { useContext } from "react";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./components/context";
import About from "./components/intro/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (<div style = {{backgroundColor:darkMode ? "#222" : "white", 
          color:darkMode && "white",
          }} 
          >
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  );
}

export default App;