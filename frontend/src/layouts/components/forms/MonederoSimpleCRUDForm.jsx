import NewDeuda from "./NewDeuda"
import NewGastoIngreso from "./NewGastoIngreso"
import NewAhorro from "./NewAhorro"

export default function MonederoSimpleCRUDForm({title}) {
  return (

        title && title === "Gasto"
            ? (<NewGastoIngreso title={title} />)
            
        : title === "Ingreso"
            ? (<NewGastoIngreso title={title} />)
        
        : title === "Deuda"
            ? (<NewDeuda />)

        : title === "Ahorro"
            ? (<NewAhorro />)
            
        : <></>
                
    
  )
}
