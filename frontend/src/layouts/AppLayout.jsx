import { BiDollarCircle } from "react-icons/bi";
import NavbarMobileMonedero from "./components/NavbarMobileMonedero";

import {Chart as ChartJS} from "chart.js/auto";

import { Bar } from "react-chartjs-2";

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
  return (
    <div className="min-h-screen bg-red-900 p-0 md:p-5 flex text-white">
      {/* desktop screens */}
      <aside className="hidden md:block md:w-80">side bar</aside>
      
      <main className="grow bg-gradient-to-b from-orange-300 to-orange-600">
        {/* mobile screens */}
        <div className="md:hidden flex flex-col gap-3  rounded-0 md:rounded-lg " >
        <section>
          <div className="w-full p-3 bg-red-900 grid place-content-center">
            <div className="flex py-10 gap-3">

              <div className="p-3 rounded-full place-self-center bg-orange-500 grid place-content-center">
                <BiDollarCircle size="50px"/>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-2xl">Gasto Total</h1>
                <p className="text-3xl">R$ 230,00</p>
              </div>
            </div>
          
          </div>
          <NavbarMobileMonedero/>
        </section>
        
        <div className="bg-orange-200 p-3 mx-auto rounded-md w-[90%]">
          <Bar 
            data={barData}
          />
        </div>

        {/* filter trigger */}
        <div className="bg-[rgba(0,0,0,0.2)] w-[90%] mx-auto p-3 rounded-md flex justify-between">
          <p>hola</p>
          <p>lupa</p>
        </div>

        {/* table rows */}

        {/* mobile navbar */}
        <nav className="fixed bottom-0 bg-red-900 w-full p-3">
          principal mobile navbar 
        </nav>

      </div>
      </main>

    </div>
  )
}
