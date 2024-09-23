import { NavLink } from "react-router-dom";

export default function List({ img, name, block, link }) {
    return (
        <NavLink to={link} className="element flex-1">
            <div className="leftBlock flex-1">
                <div className="element-logo">
                    <img src={img} alt="" />
                </div>
                <div className="element-name">
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="element-block flex-end">
                {block}
            </div>
        </NavLink>
    )
}