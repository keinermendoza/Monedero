export default function AsideFilter({title}) {
  return (
    <div className="w-full max-w-72 mx-auto">
        <h2 className="text-2xl mb-3">Filtrar {title}</h2>

        <div>
            <form 
                action=""
                className="flex flex-col gap-3"
            >
                <div>

                    <label
                        className="block" 
                        htmlFor="nombre">Nombre</label>
                    <input 
                        className="w-full rounded py-1 px-2"
                        type="text"
                        autoComplete="off"
                        id="nombre"
                        name="nombre" 
                    />
                </div>
                <div>

                    <label
                        className="block" 
                        htmlFor="categoria">Categoria</label>
                    <input 
                        className="w-full rounded py-1 px-2"
                        type="text"
                        autoComplete="off"
                        id="categoria"
                        name="categoria" 
                    />
                </div>

                <div>
                    <label
                        className="block" 
                        >Monto</label>
                    <div className="flex justify-between">
                        <input 
                            className="w-2/5 rounded py-1 px-2"
                            type="number"
                            placeholder="min"
                            autoComplete="off"
                            id="monto-min"
                            name="monto-min" 
                        />
                        -
                        <input 
                            className="w-2/5 rounded py-1 px-2"
                            type="number"
                            placeholder="max"
                            autoComplete="off"
                            id="monto-max"
                            name="monto-max" 
                        />
                    </div>
                </div>
                <div>
                    <button 
                        type="submit"
                        className="bg-red-700 hover:bg-red-600 float-right grid px-3 py-2 place-content-center rounded"
                    >Filtrar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
