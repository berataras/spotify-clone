//components
import Menu from "./Menu";
import Playlists from "./Playlists";
import DownloadButton from "./DownloadButton";
import Features from "./Features";

//img
import logo from 'assets/images/logo.svg'


function Sidebar(props) {
    return (
        <aside className='w-60 pt-6 flex flex-col'>

            <a href="" className="mb-7 px-6">
                <img className="h-10" src={logo} alt=""/>
            </a>

            <Menu />

            <Features />

            <Playlists />

            <DownloadButton />

        </aside>
    );
}

export default Sidebar;
