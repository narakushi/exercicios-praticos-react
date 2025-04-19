import { useState } from "react";

const ListaDinamica = () => {
  const [nomes, setNomes] = useState([]);
  const [nome, setNome] = useState("");

  const removerItem = (index) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  const limpaInput = () => setNome("");

  const adicionaNome = (nome) => {
    if (nome != "") {
      setNomes((prev) => [...prev, nome]);
      limpaInput();
    } else {
      alert("O nome não pode ser vazio!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={(e) => {if(e.key === 'Enter') adicionaNome(e.target.value)}}
      />
      <button onClick={() => adicionaNome(nome)}>Adicionar</button>

      <h3>Nomes adicionados</h3>
      <ul>
        {nomes.map((currentItem, index) => (
          <li key={index}>
            {currentItem}{" "}
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDinamica;
