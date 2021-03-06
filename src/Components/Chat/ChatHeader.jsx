import React, {useEffect, useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, SearchOutlined} from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ChatHeader = (props) => {

    const {roomName, messages} = props

    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10000))
    }, [])

    return (
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${randomNum}.svg`}/>
            <div className="chat__header__info">
                <h3>{roomName}</h3>
                <p>{messages[messages.length-1] ? `Last seen at ${new Date(messages[messages.length-1]?.timestamp?.toDate()).toLocaleTimeString()}` : ''}</p>
            </div>
            <div className="chat__header__right">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader