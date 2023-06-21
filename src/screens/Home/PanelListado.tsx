import { useState } from "react";
import CarProducto from "./CarProducto";
import styles from './style.module.css';
import { Producto } from "../../Tipes/Producto";

interface Props{
  productos:Producto[]
}

function PanelListado({productos} :Props) {
const [total, setTotal] = useState(0)
  
const handleSumarATotal = (precio:string)=>{
  setTotal(total+ Number(precio))
}

const handleRestarATotal = (precio:string)=>{
  setTotal(total-Number(precio))
}

  return(
  <div>
    
    <div className={styles.Header}>
      <p>Listado</p>
      <img src= "../../../public/Car.png" alt="Carrito" width={50} height={50}/>
      <p>$ {total}</p>
    </div>

    <div>
        {productos.map((p) => {
        return(
          <CarProducto
            producto={p}
            handleSumarPrecio={handleSumarATotal}
            handleRestarPrecio={handleRestarATotal}
        /> ) 
      })}
    
    </div>
  </div>);
}

export default PanelListado;