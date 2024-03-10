import {Chart as ChartJS} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import NavbarMobileMonedero from "./components/NavbarMobileMonedero";
import NavbarMobilePrincipal from "./components/NavbarMobilePrincipal";
import FilterMobile from "./components/FilterMobile";
import TableMobile from "./components/TableMobile";
import HeaderMobileMonedero from "./components/HeaderMobileMonedero";

export default function AppLayout() {
  const barData = {
    labels: ["Gasto Realizado", "Gasto Estimado"],
    datasets: [
      {
        label: "algo",
        data: [300, 200],
        backgroundColor: 'gray',
        borderColor: "red",
      }
    ],
  }

  const TableItems = [
    {
      id:1,
      data: {
        nombre: 'Corte de Cabello',
        precio: 40.00,
        categoria: 'Cuidado Personal',
        fecha: '2024-03-10'
      }
    },
    {
      id:2,
      data: {
        nombre: 'Compra de Comida',
        precio: 210.00,
        categoria: 'Alimentacion',
        fecha: '2024-03-13'
      }
    },
    {
      id:3,
      data: {
        nombre: 'Pago de Alugel',
        precio: 500.00,
        categoria: 'Habitacion',
        fecha: '2024-04-09'
      }
    },
  ]
  return (
    <div className="min-h-screen bg-red-900 p-0 md:p-5 flex text-white">
      {/* desktop screens */}
      <aside className="hidden md:block md:w-80">side bar</aside>
      
      <main className="grow overflow-x-hidden bg-gradient-to-b rounded-lg from-orange-300 to-orange-600">
        {/* mobile screens */}
        <div className="md:hidden pb-3 mb-[calc(40px+0.75rem+0.75rem)] flex flex-col gap-3" >
        <section>
          <div className="w-full p-3 bg-red-900 grid place-content-center">
            <HeaderMobileMonedero title="Gasto Total" monto={230} />
          
          </div>
          <NavbarMobileMonedero/>
        </section>
        
        {/* chart */}
        <div className="bg-orange-200 p-3 mx-auto rounded-md w-9/10">
          <Bar 
            data={barData}
          />
        </div>

        {/* filter trigger */}
        <FilterMobile title="Gastos" />

        {/* table rows */}
        <TableMobile tableTitle="Gastos Mensuales" items={TableItems} />

        {/* mobile navbar */}
        <NavbarMobilePrincipal />

      </div>
      </main>

    </div>
  )
}
