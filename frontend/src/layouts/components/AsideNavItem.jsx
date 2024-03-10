import { NavLink } from "react-router-dom"

export default function AsideNavItem({icon, text, to}) {
  return (
    <li className="bg-red-900 hover:bg-red-800 text-xl rounded-md w-full">
        <NavLink to={to}   
            className={({ isActive }) =>
            isActive ? "bg-red-700 flex items-center gap-3 p-4" : "flex items-center gap-3 p-4"
        }>
            {icon}
            {text}
        </NavLink>
    </li>
  )
}
