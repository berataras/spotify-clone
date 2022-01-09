import {ArrowLeftIcon, ArrowRightIcon} from "components/Icons";
import React from "react";
import {useHistory} from 'react-router-dom';

function Navigation() {
    const navigate = useHistory();

    return (
        <div className="flex items-center gap-x-4">
            <button onClick={() => navigate.goBack()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <ArrowLeftIcon />
            </button>
            <button onClick={() => navigate.goForward()} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <ArrowRightIcon />
            </button>
        </div>
    );
}

export default Navigation;