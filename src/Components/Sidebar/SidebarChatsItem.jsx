import React, {useEffect, useState} from 'react'
import {Avatar} from "@material-ui/core";

const SidebarChatsItem = props => {
    const {addNewChat, name, addNewRoom} = props

    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10000))
    }, [])

    const createNewChat = () => {
        const roomName = prompt('Please enter name for chat room')

        if (roomName) {
            addNewRoom(roomName)
        }
    }

    return !addNewChat ? (
        <div className='sidebar__chatsItem'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${randomNum}.svg`}/>
            <div className="sidebar__chatsItem__info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div className="sidebar__chatsItem" onClick={()=>createNewChat()}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChatsItem