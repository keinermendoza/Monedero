




// desktop
import AsideNav from "./components/AsideNav";

import { Outlet } from "react-router-dom";
export default function AppLayout() {
  

  return (
    <div className="min-h-screen bg-red-900 p-0 md:gap-5 md:p-5 flex text-white">
      {/* desktop screens */}
      <aside className="hidden md:block md:w-80">
        <AsideNav />
      </aside>
      
      <main className="grow overflow-x-hidden bg-gradient-to-b rounded-lg from-orange-300 to-orange-600">
        <Outlet />
      </main>

    </div>
  )
}
