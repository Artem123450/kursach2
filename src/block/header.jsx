import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container flex-1 sb">
                <div className="logo">
                    Soccer
                </div>
                <nav className="nav flex-1">
                    <NavLink className="header-link" to={"/ligi"} >Лиги</NavLink>
                    <NavLink className="header-link" to={"/teams"} >Команды</NavLink>
                </nav>
            </div>
        </header>
    )
}