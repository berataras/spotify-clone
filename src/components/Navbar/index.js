import Navigation from "./Navigation";
import User from "./User";
import {useRouteMatch} from "react-router-dom";

function Navbar(props) {

    const match = useRouteMatch('/search');

    return (
        <div className="h-[65px] flex justify-between items-center">
            <Navigation />

            {match && (
                <div>sa</div>
            )}

            <User />
        </div>
    );
}

export default Navbar;
