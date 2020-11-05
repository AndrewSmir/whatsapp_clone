import React from 'react'
import SidebarChatsItem from "./SidebarChatsItem";

const SidebarChatsList = (props) => {

    const chatsList = props.chatsList.map(chat => (
        <SidebarChatsItem key={chat.id} name={chat.data.name}/>
    ))

    return (
        <div className='sidebar__chats'>
            <SidebarChatsItem addNewChat={true}/>
            {chatsList}
        </div>
    )
}

export default SidebarChatsList