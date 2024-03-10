import NavLinkStyled from "./NavLinkStyled"
import { FaHome, FaUserCircle, FaWallet, FaPlusCircle } from "react-icons/fa"

export default function NavbarMobilePrincipal() {
  return (
    <nav className="fixed bottom-0 p-3 400px:gap-12 flex justify-around 400px:justify-center bg-red-900 w-full">
        <NavLinkStyled to="/home/">
            <FaHome size="40px" />
        </NavLinkStyled>
        <NavLinkStyled to="/profile/">
            <FaUserCircle size="40px" />
        </NavLinkStyled>
        <NavLinkStyled to="/monedero/">
            <FaWallet size="40px" />
        </NavLinkStyled>
        <NavLinkStyled to="#TODO-adicionar-variable-action">
            <FaPlusCircle size="40px" />
        </NavLinkStyled>
         
    </nav>
  )
}
