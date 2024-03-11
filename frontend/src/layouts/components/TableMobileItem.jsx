import { NavLink } from "react-router-dom"

export default function TableMobileItem({data}) {
    const {nombre, categoria, monto, fecha} = data
    return (
    <article className="flex justify-between">
        <div>
            <NavLink to="#TODO-action-pop-up-edit-form">
                <h3 className="text-base underline underline-offset-4 400px:text-xl">{nombre}</h3>
            </NavLink>
            <p className="mt-1 text-xs 400px:text-base">{categoria}</p>
        </div>
        <div className="text-right">
            <p className="text-base whitespace-nowrap 400px:text-2xl">R$ {monto.toFixed(2)}</p>
            <p className="mt-1 text-xs 400px:text-base">{fecha}</p>
        </div>

    </article>
  )
}
