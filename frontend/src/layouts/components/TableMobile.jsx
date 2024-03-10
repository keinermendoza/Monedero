import TableMobileItem from "./TableMobileItem"

export default function TableMobile({items, tableTitle}) {

  return (
    <section className="bg-black-20% w-9/10 rounded-md p-3 mx-auto
        flex flex-col gap-5">
        <h2 className="text-2xl font-bold">{tableTitle}</h2>

            {
                items.map(item => (
                    <TableMobileItem key={item.id} data={item.data} />
                ))
            }
    </section>
  )
}
