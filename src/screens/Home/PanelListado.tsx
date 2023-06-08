import CarProducto from "./CarProducto";

function PanelListado() {
  return(
  <div>
    <div>
      <p>Listado</p>
      <img src= "../../../public/Car.png" alt="Carrito" />
      <p>$ 100</p>
    </div>

    <CarProducto
      nombre = "Kwid" descripcion = "Automovil marca Renault" precio = {5000000} total = {5000000} cant = {1}
    />

  </div>);
}

export default PanelListado;