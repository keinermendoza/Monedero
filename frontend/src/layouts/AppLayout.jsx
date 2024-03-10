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

// desktop
import AsideNav from "./components/AsideNav";
import HeaderDesktopMonedero from "./components/HeaderDesktopMonedero";
import BodyDesktopMonedero from "./components/BodyDesktopMonedero";

export default function AppLayout() {
  

  return (
    <div className="min-h-screen bg-red-900 p-0 md:gap-5 md:p-5 flex text-white">
      {/* desktop screens */}
      <aside className="hidden md:block md:w-80">
        <AsideNav />
      </aside>
      
      <main className="grow overflow-x-hidden bg-gradient-to-b rounded-lg from-orange-300 to-orange-600">
        
        {/* mobile screens */}
        <div className="md:hidden pb-3 mb-[calc(40px+0.75rem+0.75rem)] flex flex-col gap-3" >
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
        <HeaderDesktopMonedero />
        <BodyDesktopMonedero title="Gastos Mensuales" />
      </div>


      </main>

    </div>
  )
}
