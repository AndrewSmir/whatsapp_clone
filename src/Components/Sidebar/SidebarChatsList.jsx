import React from 'react'
import SidebarChatsItem from "./SidebarChatsItem";

const SidebarChatsList = () => {

    return (
        <div className='sidebar__chats'>
            <SidebarChatsItem addNewChat={true}/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
            <SidebarChatsItem/>
        </div>
    )
}

export default SidebarChatsList