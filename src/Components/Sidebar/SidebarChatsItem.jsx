import React, {useEffect, useState} from 'react'
import {Avatar} from "@material-ui/core";
import db from "../../firebase";

const SidebarChatsItem = props => {
    const {addNewChat, name, addNewRoom, id} = props

    const [randomNum, setRandomNum] = useState(null)
    const [messages, setMessages] = useState('')

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10000))
    }, [])

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', "desc")
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data()))
                )
        }
    }, [id])

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
                <p>{messages[0] ? messages[0].message : 'No messages yet'}</p>
            </div>
        </div>
    ) : (
        <div className="sidebar__chatsItem" onClick={() => createNewChat()}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChatsItem