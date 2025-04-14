import { useState } from "react"

const PraticaArgs = () => {
  const [nome, setNome] = useState("");

  const handleChangeName = (nome) => {
    setNome(nome);
  }

  return (
    <div>
      <p>Nome: {nome}</p>

      <div>
        <button onClick={() => handleChangeName("Ana")}>Ana</button>
        <button onClick={() => handleChangeName("Bianca")}>Bianca</button>
        <button onClick={() => handleChangeName("Carla")}>Carla</button>
      </div>
    </div>
  )
}

export default PraticaArgs