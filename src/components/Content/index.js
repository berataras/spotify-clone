//components
import {Navbar} from "components";

//route
import {Route, Routes} from "react-router-dom";

//pages
import {Home, Search, Collection} from "pages";

function Content() {
    return (
        <main className='flex-auto'>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/search" element={<Search />} />
            </Routes>
            <Routes>
                <Route path="/collection" element={<Collection />} />
            </Routes>
        </main>
    );
}

export default Content;
