
import { useState } from 'react'
import './App.css'
import FormCarga from './screens/Home/FormCarga'
import  PanelListado from "./screens/Home/PanelListado"
import { Producto } from './Tipes/Producto'

function App() {
const [productos, setProductos] = useState<Producto[]>([])

const handleCrearProducto = (producto:Producto)=>{
  console.log(producto.nombre)
  setProductos([...productos,producto])
}

  return (
    <>
      <div className='principal'>
        <FormCarga handleCrearProducto={handleCrearProducto}/>
        <PanelListado productos={productos}/>
      </div>
    </>
  )
}

export default App
