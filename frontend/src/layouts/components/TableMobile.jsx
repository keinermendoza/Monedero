import TableMobileItem from "./TableMobileItem"

export default function TableMobile({data, tableTitle}) {

  return (
    <section className="bg-black-20% w-9/10 rounded-md p-3 mx-auto
        flex flex-col gap-5">
        <h2 className="text-2xl font-bold">{tableTitle}s Mensuales</h2>

            {
                data.map(itemData => (
                    <TableMobileItem key={itemData.id} data={itemData} />
                ))
            }
    </section>
  )
}
