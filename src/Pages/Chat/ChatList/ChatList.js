import React, { Fragment, useState } from 'react';
import './ChatList.css'

import { Link } from 'react-router-dom';
import { BackArrow } from '../../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecentChats from '../RecentChats/RecentChats';

const ChatList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return <Fragment>
        <div id="chatlist">
            <div className="back-to-home">
                <Link to="/">
                    <FontAwesomeIcon icon="angle-left" />
                </Link>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="room-name">
                        <h3>Chats</h3>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={(clicked) => {
                            console.log(searchTerm)
                            clicked.preventDefault()
                        }}>
                            <input className="search-user" type="search" placeholder="Search" onChange={(event) =>
                                setSearchTerm(event.target.value)} />
                        </form>
                    </div>
                    <RecentChats />
                </div>
            </div>
        </div>
    </Fragment>
}


export default ChatList;