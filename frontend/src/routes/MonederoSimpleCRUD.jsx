import {Chart as ChartJS} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// fake data
import gastoData from "../data/GastoData.json"
import { barData } from "../utils/barData";

// desktop
import HeaderDesktopMonedero from "../layouts/components/HeaderDesktopMonedero"
// import BodyDesktopMonedero from "../layouts/components/BodyDesktopMonedero"

import MonederoSimpleCRUDForm from "../layouts/components/forms/MonederoSimpleCRUDForm"

import TableDesktopMonedero from "../layouts/components/TableDesktopMonedero";

// general
import NavbarMonedero from "../layouts/components/NavbarMonedero";

// mobile
import NavbarMobilePrincipal from "../layouts/components/NavbarMobilePrincipal";
import FilterMobile from "../layouts/components/FilterMobile";
import TableMobile from "../layouts/components/TableMobile";
import HeaderMobileMonedero from "../layouts/components/HeaderMobileMonedero";

export default function MonederoSimpleCRUD({title}) {
  return (
    <>
        {/* mobile screens */}
        <div className="md:hidden pb-3 mb-[calc(40px+0.75rem+0.75rem)] flex flex-col gap-3" >
        
        {/* header */}
        <section>
          <div className="w-full p-3 bg-red-900 grid place-content-center">
            <HeaderMobileMonedero title={title} monto={230} />
          
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
        <FilterMobile title={title} />

        {/* table rows */}
        <TableMobile tableTitle={title} data={gastoData} />

        {/* mobile navbar */}
        <NavbarMobilePrincipal />

      {/* end mobile */}
      </div>

      {/* desktop */}
      <div className="hidden md:block w-full h-full">
        <HeaderDesktopMonedero />
        <section className="p-4 pt-6 flex items-start flex-col gap-5">
          <h2 className="text-black text-4xl font-medium">{title}s</h2>
          <MonederoSimpleCRUDForm title={title} />
          <form title={title} />
          <TableDesktopMonedero data={gastoData} />        
        </section>

      </div>


      
    </>
  )
}


