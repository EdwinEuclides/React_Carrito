
import { useState } from "react";

type carTipo = {
  nombre: string;
  descripcion: string;
  precio: number;
  id: number;
  agregar:any;
  actulizarNum:any;
  onDelette: any
};

export default function CarProducto(props: carTipo) {
  const {nombre, descripcion, precio, id, agregar, actulizarNum, onDelette} = props
  const [cantProd, SetCantProd] = useState(0);
  const [total, SetTotal] = useState(0)

  function agregarProd(){ 
    SetCantProd((prevCantProd)=>Math.max(prevCantProd+1,0));
    SetTotal((prevTotal)=>actulizarNum(Math.max(prevTotal + precio,0)));
    if(cantProd >0){
      agregar(actulizarNum(precio))
    }
   }

  function eliminarProd(){
    SetCantProd((prevCantProd)=>Math.max(prevCantProd-1,0));
    SetTotal((prevTotal)=>actulizarNum(Math.max(prevTotal- precio,0)));
    if(cantProd >0){
      agregar(actulizarNum(-precio))
    }
  }

  function handleDelete(){
    for(let i=0;i<cantProd;i++){
      eliminarProd()
    }
    onDelette(id);
  }

  return (
    <div>
      <button onClick={handleDelete}></button>
        <p>{nombre}</p>
        <p>{descripcion}</p>
        <p>{precio}</p>
      <div className="botonera">
        <button onClick={eliminarProd}> - </button>
        <p>{cantProd}</p>
        <button onClick={agregarProd}> + </button>
        <p>$ {total}</p>
      </div>
    </div>
  );
}

