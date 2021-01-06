import React, { Fragment } from 'react';
import './RecentChats.css'

import User from '../../../components/Container/User/User';

const RecentChats = () => {
    return <Fragment>
        <div id="recent-chats">
                <h4>Recents</h4>
            <div>
                <User />
            </div>
        </div>
    </Fragment>
}

export default RecentChats