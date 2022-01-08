//route
import {NavLink} from "react-router-dom";

//icons
import {HomeIcon, CollectionIcon, SearchIcon} from "components/Icons";

function Menu(props) {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to="/" className="nav-link">
                        <HomeIcon />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" className="nav-link">
                        <SearchIcon />
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/collection" className="nav-link">
                        <CollectionIcon />
                        Your Collection
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;