import React from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);


  return (
    <nav className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
     
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}
}
export default Navbar