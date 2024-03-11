import { Outlet } from "react-router-dom";

import {Chart as ChartJS} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// fake data
import TableItems from "../data/GastoData.json"
import { barData } from "../utils/barData";

// general
import NavbarMonedero from "./components/NavbarMonedero";

// mobile
import NavbarMobilePrincipal from "./components/NavbarMobilePrincipal";
import FilterMobile from "./components/FilterMobile";
import TableMobile from "./components/TableMobile";
import HeaderMobileMonedero from "./components/HeaderMobileMonedero";

export default function MonederoLayout() {
  return (
    <>
        {/* mobile screens */}
        <div className="md:hidden pb-3 mb-[calc(40px+0.75rem+0.75rem)] flex flex-col gap-3" >
        
        {/* header */}
        <section>
          <div className="w-full p-3 bg-red-900 grid place-content-center">
            <HeaderMobileMonedero title="Gasto Total" monto={230} />
          
          </div>
          <NavbarMonedero isMobile/>
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

      {/* end mobile */}
      </div>

      {/* desktop */}
      <div className="hidden md:block w-full h-full">
        <Outlet />
      </div>


      
    </>
  )
}
