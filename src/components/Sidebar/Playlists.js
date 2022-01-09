import React from 'react';

function Playlists(props) {
    return (
        <div className="mx-6 mt-4 py-2 flex-auto overflow-hidden border-t border-white border-opacity-10">
            <ul>
                {new Array(40).fill(
                    <li>
                        <a href="#" className="text-sm text-link flex items-center h-8 hover:text-white">13. Çalma Listem</a>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Playlists;