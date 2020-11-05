import React, {useEffect, useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AttachFile, SearchOutlined} from "@material-ui/icons";

const Chat = () => {
    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10000))
    }, [])

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${randomNum}.svg`}/>
                <div className="chat__header__info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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
            <div className="chat__body">

            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat