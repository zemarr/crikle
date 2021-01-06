import React from 'react';
import './Chat.css'

import Sidebar from './Sidebar/Sidebar';
import ChatList from './ChatList/ChatList';

const Chat = () => {
    return (
        <div id="chat">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1 ab-pos-89" style={{overflow: "hidden"}}>
                        <Sidebar />
                    </div>
                    <div className="col-md-3">
                        <ChatList />
                    </div>
                    <div className="col-md-8">
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Chat;