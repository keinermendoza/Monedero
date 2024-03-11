import NavLinkStyled from "./NavLinkStyled"

export default function NavbarMonedero({isMobile}) {
  const baseStyle = "p-3 gap-5 underline underline-offset-4 flex"
  
  const mobileBaseStyle = "bg-red-900 overflow-x-scroll justify-between 400px:justify-center"
  const mobileStyle = baseStyle + " " + mobileBaseStyle

  return (
    <nav className={isMobile ? mobileStyle : baseStyle}>
          <NavLinkStyled
            to="../resumen"
            isMobile={isMobile} 
          >
            Resumen
          </NavLinkStyled>
          <NavLinkStyled
            to="../gastos"
            isMobile={isMobile}
          >
            Gastos
          </NavLinkStyled>
          <NavLinkStyled
            to="../ingresos"
            isMobile={isMobile}
          >
            Ingresos
          </NavLinkStyled>
          <NavLinkStyled
            to="../fijos"
            isMobile={isMobile}
          >
            Fijos
          </NavLinkStyled>
          
          <NavLinkStyled
            to="../deudas"
            isMobile={isMobile}
          >
            Deudas
          </NavLinkStyled>
          <NavLinkStyled
            to="../ahorros"
            isMobile={isMobile}
          >
            Ahorros
          </NavLinkStyled>
    </nav>
  )
}
