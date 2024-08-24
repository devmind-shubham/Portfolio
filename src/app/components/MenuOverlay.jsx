import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-2 items-center'>
            {links.map((item, index) => <li key={index}>
                <NavLink href={item.href} title={item.name} />
            </li>)}
        </ul>
    )
}

export default MenuOverlay
