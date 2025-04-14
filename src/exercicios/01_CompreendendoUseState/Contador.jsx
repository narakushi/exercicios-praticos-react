import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <div>
        <button onClick={() => setContador((prevState) => prevState + 1)}>
          Incrementar
        </button>
        <button onClick={() => setContador(0)}>Zerar</button>
      </div>
    </div>
  );
};

export default Contador;
