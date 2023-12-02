import Home from "./Routes/Home";
import Favs from "./Routes/Favs";

import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


import Footer from "./Components/Footer";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <Home/>
      
     
      <Favs/>
      <Detail/>
     
      
      <Contact/>    
      <Footer />
      
    </div>
  );
}

export default App;
