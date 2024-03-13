import TableRowDesktopMonedero from "./TableRowDesktopMonedero"
export default function TableDesktopMonedero({data}) {
  return (
   

    <div className="rounded-md overflow-hidden overflow-x-auto">
    <table className="w-full">
        <thead className="bg-red-900">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Monto
                </th>
                <th scope="col" className="px-6 py-3">
                    Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                    Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                    Editar
                </th>
                <th scope="col" className="px-6 py-3">
                    Eliminar
                </th>
            </tr>
        </thead>
        <tbody className="bg-black-20%">
            {data.map(rowData => (
                <TableRowDesktopMonedero key={rowData.id} data={rowData} />
            ))}
            
        </tbody>
    </table>
    </div>

  )
}
