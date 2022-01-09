import React from 'react';
import {Link} from "react-router-dom";
import {PLayIcon} from "./Icons";

function AlbumBox(props) {
    const {id, title, description, image, type} = props;


    function rounded(){
        switch (type){
            case 'album':
                return 'rounded-2xl';
            case 'artist':
                return 'rounded-full';
            case 'podcast':
                return 'rounded-md';
        }
    }

    return (
        <Link className="w-full bg-footer hover:bg-[#282828] duration-300 p-4 rounded group">
            <div className="relative mb-4">
                <img className={`aspect-square w-full h-[177px] ${rounded()}`} src={image} alt=""/>
                <button className="play-button">
                    <PLayIcon />
                </button>
            </div>
            <div className="font-semibold">{title}</div>
            <p className="text-sm text-link mt-2 font-semibold line-clamp-2">{description}</p>
        </Link>
    );
}

export default AlbumBox;