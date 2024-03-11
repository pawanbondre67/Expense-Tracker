import React ,{useState} from 'react'
import avatar from '../../assets/avatar.jpg'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/Icons'
import './navigations.css'

const Navigations = ({active ,setActive}) => {
    
    return (
        <>    <div className="navigation">
            <div className='user-profile'>
                    <img src={avatar} alt='user avatar' />
                    
                <div className='user-profile__name'>
                    <h2>John Doe</h2>
                    <p>Administrator</p>
                </div>
            </div>

            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={()=> setActive(item.id)}
                        className={item.id === active ? 'active' : ''}
                        >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>

            <div className="bottom-nav">
                <li>
                    {signout} <span>Sign Out</span>
                </li>
            </div>
            </div>
        </>
    )
}

export default Navigations
