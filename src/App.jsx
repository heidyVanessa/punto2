import { useState } from "react";
import "./App.css";
import Fondo from "./Fondo";
import Modificar from "./Modificar";
import Validar from "./Validar";
import MostrarObjeto from "./MostrarObjeto";
import MostrarLista from "./MostrarLista";

function App() {
  return (
    <>
      <Fondo />
      <Modificar />
      <Validar />
      <MostrarObjeto />
      <MostrarLista />
    </>
  );
}

export default App;
