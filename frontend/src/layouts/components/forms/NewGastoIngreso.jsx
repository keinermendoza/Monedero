export default function NewGastoIngreso({title}) {
  return (
    <form className="bg-black-20% border-2 border-orange-200 p-3 rounded-md flex flex-col gap-3">
            <h3 className="text-xl">Nuevo {title}</h3>
            <div className="flex justify-between gap-3">
                <div>
                    <label
                        className="block" 
                        htmlFor="nuevo-nombre">
                        Nombre
                    </label>
                    <input 
                        className="px-2 py-1 rounded"
                        type="text"
                        id="nuevo-nombre"
                        name="nuevo-nombre"

                    />
                </div>
                <div>
                    <label
                        className="block" 
                        htmlFor="nuevo-nombre">
                        Nombre
                    </label>
                    <input 
                        className="px-2 py-1 rounded"
                        type="text"
                        id="nuevo-nombre"
                        name="nuevo-nombre"

                    />
                </div>
            </div>

            <div className="flex justify-between items-end gap-3">
                <div>
                    <label
                        className="block" 
                        htmlFor="nuevo-nombre">
                        Nombre
                    </label>
                    <input 
                        className="px-2 py-1 rounded"
                        type="text"
                        id="nuevo-nombre"
                        name="nuevo-nombre"

                    />
                </div>
                <div>
                    <button className="place-self-end bg-red-700 hover:bg-red-600 px-3 py-2 rounded-md">
                        Registrar
                    </button>
                </div>

            </div>
        </form>
  )
}
