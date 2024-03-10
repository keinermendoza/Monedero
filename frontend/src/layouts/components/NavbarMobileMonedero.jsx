import NavLinkStyled from "./NavLinkStyled"

export default function NavbarMobileMonedero() {
  return (
    <nav className="bg-red-800 text-sm underline underline-offset-4 sm:text-base p-2 flex justify-between">
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
