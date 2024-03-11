import NewGastoIngreso from "./forms/NewGastoIngreso"
import TableDesktopMonedero from "./TableDesktopMonedero"

export default function BodyDesktopMonedero({title}) {
  return (
    <section className="p-4 pt-6 flex items-start flex-col gap-5">
        <h2 className="text-black text-4xl font-medium">{title}s</h2>
        <NewGastoIngreso title={title} />
        <TableDesktopMonedero />        
    </section>
  )
}
