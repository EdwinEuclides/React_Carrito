import CarProducto from "./CarProducto";

export default function FormCarga(props) {
const {onAdd: agregarProd} = props;
const[nuevoProd,SetNuevoProd] = props;


  function handleSubmit(event){
    event.preventDefault();
    if(nuevoProd !== "" && nuevoProd.Precio >0){
      agregarProd(nuevoProd);
      SetNuevoProd({id:"", nombre:"",descripcion:"", precio:""})
    }
  }

  function handleChange(event){
    const {nombre, value} = event.target;
    SetNuevoProd((prevProd)=>{
      const nuevo ={...prevProd, [nombre]:value};
      /*if(nuevo.nombre !=="" && nuevo.precio>0){
        setButtonStyle(styles.formButtonOn);
      }else{
        setButtonStyle(styles.formButtonOff);
      }*/
      return nuevo;
    })
  }


  //const {nombre, descripcion, precio, id, agregar, actulizarNum, onDelette} = props

  
  return (
    <div> <h1> Carga de Productos</h1>
      <form method="post" onSubmit={handleSubmit}>
        //Revisar la definicion de CarProducto
        //<CarProducto name="Nombre" value={nuevoProd.nombre} type="text" labelContent="Nombre" onChage={handleChange} />

        //<CarProducto name="descripcion" value={nuevoProd.descripcion} type="text" labelContent="Nombre" onChage={handleChange} />

        //<CarProducto name="precio" value={nuevoProd.precio} type="text" labelContent="Nombre" onChage={handleChange} />

        <button type="submit">Agregar</button>
      </form>
      </div>
    );
  }