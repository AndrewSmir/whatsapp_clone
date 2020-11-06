import React from 'react'
import SidebarChatsItem from "./SidebarChatsItem";
import {addNewRoom} from "../../redux/chats-reducer";

const SidebarChatsList = (props) => {

    const {addNewRoom} = props

    const chatsList = props.chatsList.map(chat => (
        <SidebarChatsItem key={chat.id} name={chat.data.name}/>
    ))

    return (
        <div className='sidebar__chats'>
            <SidebarChatsItem addNewChat={true} addNewRoom={addNewRoom}/>
            {chatsList}
        </div>
    )
}

export default SidebarChatsList