import { FaSearch } from "react-icons/fa";

export default function FilterMobile({title}) {
  return (
    <div className="bg-black-20% w-9/10 mx-auto p-3 rounded-md flex items-center justify-between">
          <p className="text-lg font-semibold">Filtrar {title}</p>
          <div className="p-2.5 rounded bg-red-700">
            <FaSearch size="20px"/>
          </div>
    </div>
  )
}
