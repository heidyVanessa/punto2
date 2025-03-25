import { useState } from "react";

function MostrarObjeto() {
  const objeto = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Datos" : "Mostrar Datos"}
      </button>
      {mostrar && (
        <p>
          Nombre: {objeto.nombre}, Edad: {objeto.edad}, Ciudad: {objeto.ciudad}
        </p>
      )}
    </div>
  );
}

export default MostrarObjeto;
