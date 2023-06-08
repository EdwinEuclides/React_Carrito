import { useState } from "react";

type btnAgQ={
  signo:string;
  precio:number;
}

function BotonAgregarQuitar(props:btnAgQ) {
  const [total, SetTotal] = useState(0);
  const [cant, SetCant] = useState(0);

  function manejardorClick() {
    if (props.signo == "+") {
      SetTotal(total + props.precio);
      SetCant(cant+1);
    } else {
      SetTotal(total - props.precio);
      SetCant(cant -1);
    }
  }

  return(
  <div className="botonAgregarQuitar">
    <button type="button" onClick={manejardorClick}>
      {props.signo}
    </button>
  </div>);
}

export default BotonAgregarQuitar;
