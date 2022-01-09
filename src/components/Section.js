import React from 'react';
import {Link} from "react-router-dom";

function Section(props) {
    const {title, seeAllLink, children} = props;
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
                {seeAllLink && (
                    <Link to={seeAllLink} className="text-link text-xs font-semibold uppercase hover:underline">
                        SEE ALL
                    </Link>
                )}
            </header>
            <div className="flex gap-x-6">
                {children}
            </div>
        </section>
    );
}

export default Section;