import { NavLink } from "react-router-dom"

export default function NavLinkStyled({children, to, isMobile}) {
    const mobileActiveStyle = "text-orange-400"
    const desktopActiveStyle = "text-red-700"

    const mobileBaseStyle = "hover:text-orange-300"
    const desktopBaseStyle = "hover:text-red-900"

    const activeStyle = isMobile ? mobileActiveStyle : desktopActiveStyle
    const baseStyle = isMobile ? mobileBaseStyle : desktopBaseStyle

    return (
    <NavLink
        to={to}
        className={({ isActive }) =>
        isActive ? activeStyle : baseStyle
        }
    >
        {children}
    </NavLink>
    )
}
