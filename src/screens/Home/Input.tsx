
interface Props{
    id:string;
    placeholder:string;
    cont_label:string;
    value:string;
    onChange: (event: any)=>void;
    }

export default function Input(props:Props){

    return(
        <div>
          <input 
            type = "text" 
            id = {props.id} 
            placeholder= {props.placeholder} 
            value={props.value}
            onChange={props.onChange}
            />
          <label htmlFor = {props.id}> {props.cont_label} </label>
    </div>
    )
}