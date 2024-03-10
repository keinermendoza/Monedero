import {Chart as ChartJS} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import HeaderDesktopCard from "./HeaderDesktopCard"
import { barData } from "../../utils/barData"
import NavbarMonedero from "./NavbarMonedero";

export default function HeaderDesktopMonedero() {
  return (
    <div className="bg-orange-200 pt-3 px-4 text-black">
        <h1 className="text-xl font-semibold mb-5">Monedero</h1>
        
        <div className="flex justify-between flex-wrap gap-3">
            {/* card container */}
            <div>
                <h2 className="text-3xl mb-5">Keiner Mendoza</h2>
                <div className="flex gap-3 flex-wrap">
                    <HeaderDesktopCard title="Gasto Estimado" monto={200} />
                    <HeaderDesktopCard title="Gasto Actual" monto={200} />

                </div>
            </div>
            {/* chart container */}
            <div className="grow min-w-80 max-w-2xl">
                <Bar data={barData}/>
            </div>
            
            {/* monedero nav */}
            <div className="min-w-full">
                <NavbarMonedero />
            </div>
        </div>

    </div>
  )
}
