import { useState } from "react";
import myStyles from "./Contador.module.css";
import { MinhaDiv, MeuBotao } from "./Contador.styled";

function Contador(props) {
  const [numero, setNumero] = useState(9);

  return (
    <MinhaDiv>
      Contador: <span>{numero}</span>
      <MeuBotao onClick={() => setNumero(numero + 1)}>Click</MeuBotao>
    </MinhaDiv>
  );
}

export default Contador;
