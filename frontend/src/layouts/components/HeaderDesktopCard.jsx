import { BiDollarCircle } from "react-icons/bi";

export default function HeaderDesktopCard({title, monto}) {
  return (
    <div className="min-w-64 flex p-3 gap-3 rounded-lg bg-white drop-shadow-lg">

      <div className="text-white  p-3 rounded-full place-self-center bg-orange-500 grid place-content-center">
        <BiDollarCircle size="50px"/>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-xl">{title}</h1>
        <p className="text-2xl font-semibold">R$ {monto.toFixed(2)}</p>
      </div>
    </div>
  )
}