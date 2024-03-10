import { NavLink } from "react-router-dom"

export default function NavLinkStyled({children, to}) {
  return (
    <NavLink
        to={to}
        className={({ isActive }) =>
        isActive ? "text-orange-400" : "hover:text-orange-300"
        }
    >
        {children}
    </NavLink>
    )
}
