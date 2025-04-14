import Contador from "./exercicios/01_CompreendendoUseState/Contador"
import MudaNome from "./exercicios/02_AtualizacaoCondicional/MudaNome"
import PraticaArgs from "./exercicios/03_PraticaArgumentos/PraticaArgs"

function App() {
  return (
   <div>
    <div>
      <h1>Exercicio 01 - Contador</h1>
      <Contador />
    </div>

    <div>
      <h2>Exercicio 02 - Mudar nome</h2>
      <MudaNome />
    </div>

    <div>
      <h2>Exercicio 03 - Prática com argumentos</h2>
      <PraticaArgs />
    </div>
   </div>
  )
}

export default App
