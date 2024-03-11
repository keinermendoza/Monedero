import { FaHome, FaUserCircle, FaWallet, FaPowerOff } from "react-icons/fa"
import AsideNavItem from "./AsideNavItem"
import AsideFilter from "./AsideFilter"

export default function AsideNav() {
  return (
    <section className="flex flex-col gap-10">
        <p className="pt-3 font-semibold text-xl">Monedero App</p>

        <nav>
            <ul className="flex flex-col gap-4">
                <AsideNavItem  
                    to="/home/"
                    text="Inicio"
                    icon={<FaHome />}
                />

                <AsideNavItem  
                    to="/monedero/"
                    text="Monedero"
                    icon={<FaWallet />}
                />

                <AsideNavItem  
                    to="/profile/"
                    text="Perfil"
                    icon={<FaUserCircle />}
                />

                <AsideNavItem  
                    to="/logout/"
                    text="Salir"
                    icon={<FaPowerOff />}
                />
            </ul>
        </nav>

        <hr className="border" />

        {/* <AsideFilter /> */}
    </section>
  )
}
