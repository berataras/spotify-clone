//icons
import {EpisodeIcon, HeartIcon, PlusIcon} from "../Icons";

function Features() {
    return (
        <nav className="mt-6">
            <ul>
                <li className="pb-4">
                    <a href="#" className="flex px-6 gap-4 items-center text-link hover:text-white duration-300">
                        <div className="bg-white h-[24px] w-[24px] flex items-center justify-center">
                            <PlusIcon />
                        </div>
                        <span className="text-sm font-semibold">Create Play List</span>
                    </a>
                </li>
                <li className="pb-4">
                    <a href="#" className="flex px-6 gap-4 items-center text-link hover:text-white duration-300">
                        <div className="bg-gradient-to-br from-[#450af5] to-[#c4efd9] h-[24px] w-[24px] flex items-center justify-center">
                            <HeartIcon />
                        </div>
                        <span className="text-sm font-semibold">Likes</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex px-6 gap-4 items-center text-link hover:text-white duration-300">
                        <div className="bg-[#006450] h-[24px] w-[24px] flex items-center justify-center">
                            <EpisodeIcon />
                        </div>
                        <span className="text-sm font-semibold">Episodes</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Features;