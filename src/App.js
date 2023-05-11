import React, {useState} from "react";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/Ui/Temas";
import { ThemeProvider } from "styled-components";   //provedor de temas (theme provider)... lo que hay que tener en cuenta es que para que se pueda aplicar este ThemeProvider, lo que necesitamos hacer es encapsular todos los componentes que van a heredar los estilos o los colores dependiendo del tema. Entonces por eso vamos a encapsular o engrapar toda nuestra aplicación en este themeProvider.//
import Header from "./Components/Header/Index";
import Container from "./Components/Container/Index";
import { BtnTema } from "./Components/Ui/Index";
import LuzTema from "./Components/LuzTema";

function App() {
  const [tema, setTema]= useState(true); //tema seria valor actual y setTema valor final...por ponerle un nombre
  
  const llaveLuzTema =() => {
    setTema((tema)=> !tema) //tema esta vinculado con <LuzTema/> y el operador ternario, si es true temaClaro sino temaOscuro
  }
  
  return (
/*Ahora lo que vamos a hacer es en este themeProvider recibe una propiedad. 
Esta prop se llama theme, la cual va a recibir un objeto con los colores que vamos a utilizar*/

    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>   
      <GlobalStyle />
      <BtnTema onClick={llaveLuzTema}>
        
        <LuzTema tema={tema} /> 
      </BtnTema>
       
      <Header />
      <Container />
    </ThemeProvider>
  );
}
export default App;
