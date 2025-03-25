import { useState } from "react";

function MostrarLista() {
  const datos = ["Manzana", "Banana", "Cereza", "Durazno"];
  const [mostrar, setMostrar] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Lista" : "Mostrar Lista"}
      </button>

      {mostrar && (
        <ul>
          {datos.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MostrarLista;
