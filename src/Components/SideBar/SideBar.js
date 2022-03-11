import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './SideBar.css'
import { SidebarData } from './SideBarData';
import { useState } from 'react'
import { IconContext } from 'react-icons'
function SideBar() {
    const [sidebar, setSidebar] = useState(true);
    const showSideBar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                {/* <div className="navbar">
                    <Link to="#" className='menu-bars' >
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>
                </div> */}
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items'   >
                        {/* <li className="navbar-toggle">
                            <Link to="#" className="menu-bars" >
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li> */}
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName} >
                                        <Link to={item.path}>
                                            {/* {item.icon} */}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>

        </>
    )
}
export default SideBar;
// onClick={showSideBar}