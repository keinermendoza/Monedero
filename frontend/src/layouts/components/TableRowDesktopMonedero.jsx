export default function TableRowDesktopMonedero({rowData}) {
    const {nombre, monto, categoria, fecha} = rowData
    return (
    <tr >
        <th scope="row"  className="px-6 py-4 whitespace-nowrap">
            {nombre}
        </th>
        <td className="px-6 py-4">
            {monto.toFixed(2)}
        </td>
        <td className="px-6 py-4">
            {categoria}
        </td>
        <td className="px-6 py-4">
            {fecha}
        </td>
        <td className="px-6 py-4">
            Editar
        </td>
        <td className="px-6 py-4">
            Eliminar
        </td>
    </tr>
  )
}
