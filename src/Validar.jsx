import { useState } from "react";

function Validar() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <p>
        {numero > 10 ? "El número es mayor a 10" : "El número es 10 o menor"}
      </p>
    </div>
  );
}

export default Validar;
