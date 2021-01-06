import React from 'react';
import './Sidebar.css'

import Logo from '../../../Header/Logo/Logo';
import Avatar from '../../../components/Avatar/Avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sidebarItems = [
    {
        cName: "profile",
        icon: <FontAwesomeIcon icon="user" />,
        id: 101
    },
    {
        cName: "chats",
        icon: <FontAwesomeIcon icon="comment" />,
        id: 102
    },
    {
        cName: "settings",
        icon: <FontAwesomeIcon icon="cog" />,
        id: 103
    },
    {
        cName: "userAvatar",
        icon: undefined,
        id: 104
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="toolbar">
                <div className="sidebar-brand-box">
                    {/* <Link to> */}
                    <Logo cName="sidebar-logo" />
                    {/* </Link> */}
                </div>
                <div className="sidebar-pills">
                    <ul>
                        {sidebarItems.map((item) =>
                            <li className={item.cName} key={item.id}>
                                {item.icon}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;