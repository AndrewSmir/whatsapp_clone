import React from 'react'
import SidebarChatsItem from "./SidebarChatsItem";
import {NavLink} from "react-router-dom";

const SidebarChatsList = (props) => {

    const {addNewRoom} = props

    const chatsList = props.chatsList.map(chat => (
        <NavLink to={`/room/${chat.id}`} key={chat.id} >
            <SidebarChatsItem name={chat.data.name} id={chat.id}/>
        </NavLink>
    ))

    return (
        <div className='sidebar__chats'>
            <SidebarChatsItem addNewChat={true} addNewRoom={addNewRoom}/>
            {chatsList}
        </div>
    )
}

export default SidebarChatsList