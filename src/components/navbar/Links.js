import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰  News' },
    { url: '/images', text: '📷  Images' },
    { url: '/videos', text: '📹  Videos' }
];

const Links = () => {
    return (
        <div className="flex justify-center items-center sm:justify-around mt-4">
            {links.map(({ url, text },index) => (
                <NavLink key={index} to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" className="m-2 mb-0" >
                    {text}
                </NavLink>
            ))}
        </div>
    )
};

export default Links;
