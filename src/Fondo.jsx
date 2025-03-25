import { useState, useEffect } from "react";

function Fondo() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={() => setColor("lightblue")}>Azul</button>
      <button onClick={() => setColor("lightgreen")}>Verde</button>
      <button onClick={() => setColor("lightcoral")}>Rojo</button>
      <button onClick={() => setColor("white")}>Blanco</button>
    </div>
  );
}

export default Fondo;
