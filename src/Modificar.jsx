import { useState } from "react";

function Modificar() {
  const [textos, setTextos] = useState(["Texto 1", "Texto 2", "Texto 3"]);

  return (
    <div>
      <p>{textos[0]}</p>
      <p>{textos[1]}</p>
      <p>{textos[2]}</p>
      <button onClick={() => setTextos(["Nuevo 1", "Nuevo 2", "Nuevo 3"])}>
        Cambiar Textos
      </button>
    </div>
  );
}

export default Modificar;
