import { useState } from "react";

const MudaNome = () => {
  const [nome, setNome] = useState("Aline");

  return (
    <div>
      <p>{nome}</p>
      <button
        onClick={() => {
          if (nome === "Aline") setNome("Ana");
        }}
      >
        Mudar nome
      </button>
    </div>
  );
};
export default MudaNome;
