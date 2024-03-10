import NavLinkStyled from "./NavLinkStyled"

export default function NavbarMobileMonedero() {
  return (
    <nav className="bg-red-800 p-3 gap-5 overflow-x-scroll underline underline-offset-4  flex justify-between 400px:justify-center">
          <NavLinkStyled
            to="/gastos" 
          >
            Resumen
          </NavLinkStyled>
          <NavLinkStyled
            to="/gastos"
          >
            Gastos
          </NavLinkStyled>
          <NavLinkStyled
            to="/gastos"
          >
            Ingresos
          </NavLinkStyled>
          <NavLinkStyled
            to="/gastos"
          >
            Deudas
          </NavLinkStyled>
          <NavLinkStyled
            to="/gastos"
          >
            Ahorro
          </NavLinkStyled>
    </nav>
  )
}
