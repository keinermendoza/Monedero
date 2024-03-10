import { BiDollarCircle } from "react-icons/bi";

export default function HeaderMobileMonedero({title, monto}) {
  return (
    <div className="flex py-10 gap-3">

      <div className="p-3 rounded-full place-self-center bg-orange-500 grid place-content-center">
        <BiDollarCircle size="50px"/>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-3xl">R$ {monto.toFixed(2)}</p>
      </div>
    </div>
  )
}
