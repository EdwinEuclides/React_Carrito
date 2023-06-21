import { FormEvent, useState } from "react";
import Input from "./Input";
import styles from './style.module.css'
import { Producto } from "../../Tipes/Producto";

interface Props{
  handleCrearProducto:(producto:Producto)=>void;
}

export default function FormCarga({handleCrearProducto} :Props) {
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")

  
  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    handleCrearProducto( { nombre : nombre,  descripcion:descripcion,  precio: precio})  
  }

  return (
    <section className={styles.ContenedorForm}> 
      <h2> Carga de Productos</h2>

      <form onSubmit={handleSubmit}>
        <Input 
        id="Nombre" 
        placeholder="producto" 
        cont_label = "Nombre"
        value ={nombre}
        onChange={(event) =>setNombre(event.target.value)} 
        />

        <Input 
          id="Descripcion"
          placeholder="Opcional"
          cont_label="Descripcion"
          value = {descripcion}
          onChange = {(event)=>setDescripcion(event.target.value)}
        />

        <Input 
        id="Precio" 
        placeholder="$" 
        cont_label = "Precio"
        value={precio}
        onChange={(event)=>setPrecio(event.target.value)}
        />

        <button type="submit">Agregar</button>
      </form>
      </section>
    );
  }


