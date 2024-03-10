export default function TableDesktopMonedero() {
  return (
   

<div className="rounded-md overflow-hidden overflow-x-auto">
    <table className="w-full">
        <thead className="bg-red-900">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
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
            <tr >
                <th scope="row"  className="px-6 py-4 whitespace-nowrap">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    Editar
                </td>
                <td className="px-6 py-4">
                    Eliminar
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

  )
}
