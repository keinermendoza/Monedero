import NavLinkStyled from "./NavLinkStyled"
import { FaHome, FaUserCircle, FaWallet, FaPlusCircle } from "react-icons/fa"

export default function NavbarMobilePrincipal() {
  return (
    <nav className="fixed bottom-0 p-3 400px:gap-12 flex justify-around 400px:justify-center bg-red-900 w-full">
        <NavLinkStyled 
            to="/home/"
            isMobile
        >
            <FaHome size="40px" />
        </NavLinkStyled>
        <NavLinkStyled 
            to="/profile/"
            isMobile
        >
            <FaUserCircle size="40px" />
        </NavLinkStyled>
        <NavLinkStyled 
            to="/monedero/"
            isMobile
        >
            <FaWallet size="40px" />
        </NavLinkStyled>
        <NavLinkStyled 
            to="#TODO-adicionar-variable-action"
            isMobile
        >
            <FaPlusCircle size="40px" />
        </NavLinkStyled>
         
    </nav>
  )
}
