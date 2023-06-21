import {useState } from "react";
import styles from './style.module.css'
import { Producto } from "../../Tipes/Producto";

interface Props{
  producto:Producto
  handleSumarPrecio:(precio: string)=>void;
  handleRestarPrecio:(precio: string)=>void;
}

export default function CarProducto({producto, handleSumarPrecio, handleRestarPrecio}: Props) {
   const [cant, setCant]= useState(0)
      
   const handleQuitar = ()=>{
    if(cant >0){
      setCant(cant-1)
      handleRestarPrecio(producto.precio)
    }
   }

   const handleAgregar = ()=>{
    if(cant<10) {
      setCant(cant+1)
      handleSumarPrecio(producto.precio)
   }
   else{
    alert('Superó la cantidad máxima.')
   }
   }


  return (
    <div className={styles.Contenedor}>
      <p>{ producto.nombre}</p>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
      

      <div className={styles.ContenedorBtn}>
        <button type="button" onClick={handleQuitar}>-</button>
        <p>{cant}</p>
        <button type="button" onClick={handleAgregar}>+</button>
      </div>
    </div>
  );
}

