

//icons
import {DownloadIcon} from "components/Icons";

function DownloadButton(props) {
    return (
        <a className="flex items-center gap-4 px-6 my-3 cursor-pointer text-sm text-link font-semibold hover:text-white">
            <DownloadIcon />
            Download App
        </a>
    );
}

export default DownloadButton;